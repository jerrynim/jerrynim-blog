import React, { memo, useState } from "react";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";
import usePrevious from "../../Hooks/usePrevious";
import useMeasure from "../../Hooks/useMeasure";
import * as Icons from "../../public/static/icons";
import theme from "../../style/theme";

const Frame = styled("div")`
  position: relative;
  padding: 8px 0px 0px 8px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow-x: hidden;
  vertical-align: middle;
  color: ${theme.black};
  fill: ${theme.black};

  svg {
    fill: ${props => props.theme.black_white};
  }
  .nav {
    display: flex;
  }
`;

const Title = styled("span")`
  vertical-align: middle;
`;

const Content = styled(animated.div)`
  will-change: transform, opacity, height;
  margin-left: 6px;
  padding: 0px 0px 0px 14px;
  border-left: 1px dashed ${props => props.theme.black_white};
  overflow: hidden;
`;

const toggle = {
  width: "1em",
  height: "1em",
  marginRight: 10,
  cursor: "pointer",
  verticalAlign: "middle"
};

interface IProps {
  children?: any;
  name: any;
  style?: any;
  defaultOpen?: boolean;
}

const Tree: React.FC<IProps> = memo(({ children, name, style, defaultOpen = false }) => {
  const [isOpen, setOpen] = useState(defaultOpen);
  const previous = usePrevious(isOpen);
  const [bind, { height: viewHeight }]: any = useMeasure();
  const { height, opacity, transform }: any = useSpring({
    from: { height: 0, opacity: 0, transform: "translate3d(20px,0,0)" },
    to: {
      height: isOpen ? viewHeight : 0,
      opacity: isOpen ? 1 : 0,
      transform: `translate3d(${isOpen ? 0 : 20}px,0,0)`
    }
  });
  const Icon = Icons[`${children ? (isOpen ? "Minus" : "Plus") : "Close"}SquareO`];
  return (
    <Frame>
      <div className="nav">
        <Icon style={{ ...toggle, opacity: children ? 1 : 0.3 }} onClick={() => setOpen(!isOpen)} />
        <Title style={style}>{name}</Title>
      </div>
      <Content style={{ opacity, height: isOpen && previous === isOpen ? "auto" : height }}>
        <animated.div style={{ transform }} {...bind} children={children} />
      </Content>
    </Frame>
  );
});
export default Tree;
