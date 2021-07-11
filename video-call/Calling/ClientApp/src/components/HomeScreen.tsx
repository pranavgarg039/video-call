import React from 'react';
import { Stack, PrimaryButton, Image, IImageStyles } from '@fluentui/react';
import { VideoCameraEmphasisIcon, ChevronEndMediumIcon } from '@fluentui/react-icons-northstar';
import heroSVG from '../assets/mainpage.svg';
import {
  imgStyle,
  containerTokens,
  headerStyle,
  upperStackTokens,
  videoCameraIconStyle,
  buttonStyle,
  nestedStackTokens,
  upperStackStyle,
} from './styles/HomeScreen.styles';

export interface HomeScreenProps {
  startCallHandler(): void;
}

const imageStyleProps: IImageStyles = {
  image: {
    height: '100%',
    width: '100%'
  },
  root: {}
};

export default (props: HomeScreenProps): JSX.Element => {
  const imageProps = { src: heroSVG.toString() };
  const headerTitle = 'Group Video Call And Chat Application';
  const startCallButtonText = 'Start a call';
  const chatApp = 'Group Chat';
  const listItems = [
    'Video Calling with upto 50 members.',
    'Switch on/off camera, mute/unmute your mic and share screen.',
    'Create teams and chat with your friends.',
    'Read receipts, online/offline features also implemented.'
  ];
  return (
    <Stack horizontal horizontalAlign="center" verticalAlign="center" tokens={containerTokens}>
      <Stack className={upperStackStyle} tokens={upperStackTokens}>
        <div className={headerStyle}>{headerTitle}</div>
        <Stack tokens={nestedStackTokens}>
          <ul>
            <li>{listItems[0]}</li>
            <li>{listItems[1]}</li>
            <li>{listItems[2]}</li>
            <li>{listItems[3]}</li>
          </ul>
        </Stack>
        <PrimaryButton className={buttonStyle} onClick={props.startCallHandler}>
          <VideoCameraEmphasisIcon className={videoCameraIconStyle} size="medium" />
          {startCallButtonText}
        </PrimaryButton>
        
        <PrimaryButton href = "https://teams-clone-chat.netlify.app" className={buttonStyle}>
          <ChevronEndMediumIcon className={videoCameraIconStyle} size="medium" />
          {chatApp}
        </PrimaryButton>
      </Stack>
      <Image
        alt="Teams Clone. Photograph of team working together."
        className={imgStyle}
        styles={imageStyleProps}
        {...imageProps}
      />
    </Stack>
  );
};
