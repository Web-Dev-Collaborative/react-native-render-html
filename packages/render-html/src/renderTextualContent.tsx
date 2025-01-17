import React, { ReactNode } from 'react';
import { Text } from 'react-native';
import { TPhrasing, TText } from '@native-html/transient-render-engine';
import { TDefaultRendererProps } from './shared-types';
import getNativePropsForTNode from './helpers/getNativePropsForTNode';

const renderTextualContent = (
  props: TDefaultRendererProps<TPhrasing | TText>,
  children: ReactNode
) => {
  return React.createElement(Text, getNativePropsForTNode(props), children);
};

export default renderTextualContent;
