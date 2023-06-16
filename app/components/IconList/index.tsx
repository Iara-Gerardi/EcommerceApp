import React from 'react';
import {IconText, IconWrapper, ItemWrapper, ListWrapper} from './styled';
import {FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import ThemeIcon from '../ThemeIcon';

function IconList() {
  const a = [
    {key: '2djs', name: 'one'},
    {key: 'dnsk', name: 'two'},
    {key: '3kdk', name: 'three'},
    {key: '3kndk', name: 'three'},
    {key: '3kk', name: 'three'},
    {key: '3knjdk', name: 'three'},
    {key: '3k2iwnndk', name: 'three'},
    {key: '3knaijsdk', name: 'three'},
  ];
  return (
    <ListWrapper>
      <FlatList
        horizontal={true}
        keyExtractor={item => item.key}
        data={a}
        renderItem={item => (
          <ItemWrapper>
            <IconWrapper>
              <ThemeIcon />
            </IconWrapper>
          </ItemWrapper>
        )}
      />
    </ListWrapper>
  );
}

export default IconList;
