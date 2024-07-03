import UnityView from './UnityView';

export declare interface RNUnityMethods {
    postMessage: (
      gameObject: string,
      methodName: string,
      message: string) => void
    unloadUnity: () => void
    pauseUnity: (pause: boolean) => void
    resumeUnity: () => void
    windowFocusChanged: (hasFocus: boolean) => void
}

export default UnityView;
