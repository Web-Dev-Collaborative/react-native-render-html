import React from 'react';
import { TNode, TPhrasing } from '@native-html/transient-render-engine';
import { useTNodeChildrenRenderer } from './context/TChildrenRendererContext';
import { TDefaultRenderer } from './shared-types';
import { TNodeSubRendererProps } from './internal-types';
import useAssembledCommonProps from './hooks/useAssembledCommonProps';
import renderTextualContent from './renderTextualContent';

export const TDefaultPhrasingRenderer: TDefaultRenderer<TPhrasing> = ({
  children,
  ...props
}) => {
  const { tnode, propsForChildren } = props;
  const TNodeChildrenRenderer = useTNodeChildrenRenderer();
  const resolvedChildren =
    children ??
    React.createElement(TNodeChildrenRenderer, {
      tnode,
      propsForChildren
    });
  return renderTextualContent(props, resolvedChildren);
};

function InnerTPhrasingRenderer(props: TNodeSubRendererProps<TPhrasing>) {
  const { assembledProps, Renderer } = useAssembledCommonProps(
    props,
    TDefaultPhrasingRenderer
  );
  return React.createElement(Renderer, assembledProps);
}

function isGhostTNode(tnode: TNode) {
  return (
    (tnode.type === 'text' && (tnode.data === '' || tnode.data === ' ')) ||
    tnode.type === 'empty'
  );
}

export default function TPhrasingRenderer(
  props: TNodeSubRendererProps<TPhrasing>
) {
  const TNodeChildrenRenderer = useTNodeChildrenRenderer();
  // When a TPhrasing node is anonymous and has only one child, its
  // rendering amounts to rendering its only child.
  if (
    props.sharedProps.bypassAnonymousTPhrasingNodes &&
    props.tnode.tagName == null &&
    props.tnode.children.length <= 1
  ) {
    return React.createElement(TNodeChildrenRenderer, {
      tnode: props.tnode
    });
  }
  if (
    props.sharedProps.enableExperimentalGhostLinesPrevention &&
    props.tnode.tagName == null &&
    props.tnode.children.every(isGhostTNode)
  ) {
    return null;
  }
  return React.createElement(InnerTPhrasingRenderer, props);
}
