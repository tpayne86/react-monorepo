import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoadingFallback from '@healthifyme/ui-components/lib/compounds/LoadingFallback/';
import AlertFallback from '@healthifyme/ui-components/lib/compounds/AlertFallback/';
import SimpleModal from '@healthifyme/ui-components/lib/elements/Modal/SimpleModal/';
import { transformArrayToArrayOfArraysRamdomly } from '@healthifyme/utilities/lib/arrays';
import { memePageFetchMemes } from './MemePage.actions';
import MemeGrid from './Components/MemeGrid/MemeGrid.component';

import { findMemeInMatrix } from './MemePage.utility';

class MemePage extends React.Component {
  static propTypes = {
    memes: PropTypes.object.isRequired,
    memePageFetchMemesAction: PropTypes.func.isRequired,
  };

  state = {
    selectedMeme: {},
    visible: false,
  };

  componentDidMount() {
    this.initData();
  }

  initData = () => {
    const {
      memePageFetchMemesAction,
      memes: { data },
    } = this.props;
    if (data.length === 0) {
      memePageFetchMemesAction();
    }
  };

  handleMemeClick = (ev) => {
    const { target } = ev;
    const identifier = target.getAttribute('data-identifier');
    if (identifier) {
      const {
        memes: { data },
      } = this.props;
      const matrix = transformArrayToArrayOfArraysRamdomly(data, 5);
      const memeClicked = findMemeInMatrix(matrix, identifier);
      this.setState({ selectedMeme: memeClicked, visible: true });
    }
  };

  closePopup = () => {
    this.setState({ visible: false });
  };

  render() {
    const {
      memes: { loading, error, data },
    } = this.props;
    const { visible, selectedMeme } = this.state;
    return (
      <div className="memepage memepage__wrapper margin margin--xlg">
        <LoadingFallback loading={loading}>
          {/* can use only one alert fallback. will change later */}
          <AlertFallback
            hasAlert={error !== null}
            alertTitle="there is an error"
            alertDescription="some really long error message for the user"
          >
            <AlertFallback
              hasAlert={data && data.length === 0}
              alertTitle="No data Found"
              alertDescription="api returned no data for the request"
              type="info"
            >
              <MemeGrid
                memes={transformArrayToArrayOfArraysRamdomly(data, 5)}
                onClick={this.handleMemeClick}
              />
              <SimpleModal
                visible={visible}
                title={
                  Object.keys(selectedMeme).length > 0 ? selectedMeme.name : ''
                }
                onOk={this.closePopup}
                onCancel={this.closePopup}
              >
                <img src={selectedMeme.url} alt="meme" width="100%" />
              </SimpleModal>
            </AlertFallback>
          </AlertFallback>
        </LoadingFallback>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  memes: store.modules.meme.pupularMemes,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      memePageFetchMemesAction: memePageFetchMemes,
    },
    dispatch,
  );

export { MemePage, mapStateToProps, mapDispatchToProps };
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MemePage);
