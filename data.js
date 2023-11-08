var APP_DATA = {
  "scenes": [
    {
      "id": "0-room_1",
      "name": "Спальня",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.4069669810135341
      },
      "linkHotspots": [
        {
          "yaw": -0.5514493591190952,
          "pitch": 0.1409159083948488,
          "rotation": 0,
          "target": "1-room_2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-room_2",
      "name": "Гостиная",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.4069669810135341
      },
      "linkHotspots": [
        {
          "yaw": -0.5907313448667075,
          "pitch": 0.1265740926913832,
          "rotation": 0,
          "target": "0-room_1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
