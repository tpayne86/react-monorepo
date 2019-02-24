import React from 'react';
import PropTypes from 'prop-types';

import CardWithImage from '@nikaah/ui-components/lib/elements/Card/CardWithImage/';

import {
  Wrapper, Flex, FlexCol, Item,
} from './MemeGrid.styles';

const MemeGrid = ({ memes, onClick }) => (
  <Wrapper>
    <Flex>
      {
      memes.map((row, i) => (
        <FlexCol key={i}> {/* eslint-disable-line */}
          {
            row.map(meme => (
              <Item key={meme.id}>
                <CardWithImage
                  title={meme.name}
                  imgUrl={meme.url}
                  onClick={onClick}
                  identifier={meme.id}
                />
              </Item>
            ))
          }
        </FlexCol>
      ))
    }
    </Flex>
  </Wrapper>
);

MemeGrid.propTypes = {
  memes: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MemeGrid;
