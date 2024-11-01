module.exports = {
  env: {
    channel: 'aryqtv', //dailymotion channel
    channelID: 'x1c3iqq',
    youtubeApiKey: 'AIzaSyDJraNMuVIoIVQWVnrejH6-OzoEEYNtFls',  //youtube api key
    platform: 'dailymotion', // youtube or dailymtion
    latestYoutubeID: 'PLQ74MR5_8Xiedg5tvI1FXydZNRmEFrO8J',  // latest videos youtube
    mainslider: 'https://node.aryzap.com/api/slider/67053b70778135a14ee60af1', // slider from CMS
    popularplaylist: 'https://node.aryzap.com/api/series/byCatID/DIGITAL:%20Popular/PK', // Popular Playlist from CMS
    onair: 'https://node.aryzap.com/api/series/byCatID/QTV%20ON%20AIR/PK', // On Air Dramas from CMS
    archiveplaylist: 'https://node.aryzap.com/api/series/byCatID/QTV%20ARCHIVE/PK', // Archive Dramas from Playlost
    singleseries: 'https://node.aryzap.com/api/series/byCatID/QTV%20single%20series/PK', // Single Series from CMS
    scheduleApi: 'https://api.arydigital.tv/v4/qtv_schedule.php', // Schedule, manage manually
    NEXT_PUBLIC_GOOGLE_ANALYTICS: 'G-01TL335R2Z', // Ananlytics
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require("./scripts/sitemap-generator");
    }
    return config;
  }
};