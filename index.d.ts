import type { ComponentPropsWithRef, ComponentType } from 'react';

  type MuxData = {
    env_key: string;
    /**
     * @example "12345"
     */
    viewer_user_id?: string;
    /**
     * @example "player_test_A"
     */
    experiment_name?: string;
    /**
     * @example "cus-1"
     */
    sub_property_id?: string;
    /**
     * See metadata docs for available metadata fields https://docs.mux.com/docs/web-integration-guide#section-5-add-metadata
     * @example "My Main Player"
     */
    player_name?: string;
    /**
     * @example "1.0.0"
     */
    player_version?: string;
    /**
     * The version of react-native-video that you are using. (optional, but encouraged)
     * @example "5.0.2"
     */
    player_software_version?: string;
    /**
     * @example 1451606400000
     */
    player_init_time?: number;
    /**
     * @example "abcd123"
     */
    video_id: string;
    /**
     * @example "My Great Video"
     */
    video_title?: string;
    /**
     * @example "Weekly Great Videos"
     */
    video_series?: string;
    /**
     * In milliseconds
     * @example 120000
     */
    video_duration?: number;
    video_stream_type?: 'live' | 'on-demand';
    /**
     * @example "Fastly", "Akamai"
     */
    video_cdn?: string;
  };

  type MuxOptions = {
    /**
     * The name of your application. (required)
     */
    application_name: string;
    /**
     * The version of your application. (optional, but encouraged)
     */
    application_version?: string;
    data: MuxData;
  };

  /**
   * @see https://docs.mux.com/guides/data/monitor-react-native-video
   */
  export default function muxReactNativeVideo<Component>(
    component: Component
  ): ComponentType<ComponentPropsWithRef<Component> & { muxOptions: MuxOptions }>;