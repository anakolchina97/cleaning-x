import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

const Video = ({ position = '0' }) => {
  return (
    <VideoBox position={position}>
      <VideoCover>
        <VideoPlay></VideoPlay>
      </VideoCover>
    </VideoBox>
  );
};

const VideoBox = styled.div`
  border-radius: ${rem(53)};
  max-width: ${rem(1012)};
  width: 100%;
  margin: ${(props) => props.position};
  background: url(${require('../images/video-cover.svg').default}) no-repeat center center;
  background-size: cover;
  aspect-ratio: 1012 / 570;
`;

const VideoCover = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  aspect-ratio: 1012 / 570;
`;

const VideoPlay = styled.div`
  width: 19.57%;
  height: 34.74%;
  border-radius: 50%;
  background: url(${require('../images/video-play.svg').default}) no-repeat 0 0;
  background-size: cover;
  cursor: pointer;
`;

export default Video;
