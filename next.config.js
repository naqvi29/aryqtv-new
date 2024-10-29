module.exports = {
  env: {
    channel: 'arydigitalofficial', //dailymotion channel
    youtubeApiKey: 'AIzaSyDJraNMuVIoIVQWVnrejH6-OzoEEYNtFls',  //youtube api key
    platform: 'dailymotion', // youtube or dailymtion
    latestYoutubeID: 'PLb2aaNHUy_gHJxvUuTMy6XcGSDo6d_4Nq',  // latest videos youtube
    mainslider: 'https://node.aryzap.com/api/slider/67053b70778135a14ee60af1', // slider from CMS
    popularplaylist: 'https://node.aryzap.com/api/series/byCatID/DIGITAL:%20Popular/PK', // Popular Playlist from CMS
    onair: 'https://node.aryzap.com/api/series/byCatID/DIGITAL:%20On%20Air/PK', // On Air Dramas from CMS
    archiveplaylist: 'https://node.aryzap.com/api/series/byCatID/DIGITAL:%20Archive/PK', // Archive Dramas from Playlost
    singleseries: 'https://node.aryzap.com/api/series/byCatID/Digital:%20Single%20Series/PK', // Single Series from CMS
    scheduleApi: 'https://api.arydigital.tv/v4/schedule.php', // Schedule, manage manually
    NEXT_PUBLIC_GOOGLE_ANALYTICS: 'G-01TL335R2Z', // Ananlytics
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require("./scripts/sitemap-generator");
    }
    return config;
  }
};