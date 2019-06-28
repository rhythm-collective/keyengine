window.onSpotifyWebPlaybackSDKReady = () => {
  const token = 'BQBk7eK3kNLve4uBG-1OdgsyHvZIy5v0mtG5EZa0IvG8LNdWZkC0bJkStGpk09xNHmfmQ3cZrjT13_YtmPs436y_VcMAYxoCA0JR6yVaqmxb_CSQUWqNBPqFmUZHtM5UOXyfsx9VXYu9LN-d2vFVNPwMZxLdt-xub5el';
  const player = new Spotify.Player({
    name: 'Web Playback SDK Quick Start Player',
    getOAuthToken: cb => { cb(token); }
  });

  // Error handling
  player.addListener('initialization_error', ({ message }) => { console.error(message); });
  player.addListener('authentication_error', ({ message }) => { console.error(message); });
  player.addListener('account_error', ({ message }) => { console.error(message); });
  player.addListener('playback_error', ({ message }) => { console.error(message); });

  // Playback status updates
  player.addListener('player_state_changed', state => { console.log(state); });

  // Read
  player.addListener('ready', ({ device_id }) => {
    console.log('Ready with Device ID', device_id);
  });

  // Not Ready
  player.addListener('not_ready', ({ device_id }) => {
    console.log('Device ID has gone offline', device_id);
  });

  // Connect to the player!
  player.connect();
};
