import React from 'react';
import { DefaultButton, PrimaryButton, Stack } from '@fluentui/react';
import { VideoCameraEmphasisIcon } from '@fluentui/react-icons-northstar';
import {
  endCallContainerStyle,
  endCallTitleStyle,
  buttonStyle,
  mainStackTokens,
  buttonsStackTokens,
  upperStackTokens,
  videoCameraIconStyle,
  bottomStackFooterStyle
} from './styles/EndCall.styles';

export interface EndCallProps {
  message: string;
  rejoinHandler(): void;
  homeHandler(): void;
}

export default (props: EndCallProps): JSX.Element => {
  const goHomePage = 'Go to homepage';
  const rejoinCall = 'Rejoin call';
  const feedbackLink = 'https://www.linkedin.com/in/pranavgarg039/';

  return (
    <Stack verticalAlign="center" tokens={mainStackTokens} className={endCallContainerStyle}>
      <Stack tokens={upperStackTokens}>
        <div className={endCallTitleStyle}>{props.message}</div>
        <Stack horizontal tokens={buttonsStackTokens}>
          <PrimaryButton className={buttonStyle} onClick={props.rejoinHandler}>
            <VideoCameraEmphasisIcon className={videoCameraIconStyle} size="medium" />
            {rejoinCall}
          </PrimaryButton>
          <DefaultButton className={buttonStyle} onClick={props.homeHandler}>
            {goHomePage}
          </DefaultButton>
        </Stack>
        <div className={bottomStackFooterStyle}>
          <a href={feedbackLink}>Connect</a>
          &nbsp;with me on LinkedIn.
        </div>
      </Stack>
    </Stack>
  );
};
