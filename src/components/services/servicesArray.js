import React from "react"
import { FiVideo, FiUsers } from "react-icons/fi"
import { TiDeviceLaptop } from "react-icons/ti"
export const services = [
  {
    icon: <TiDeviceLaptop />,
    service: "Virtual Tutoring",
    list: [
      "Meet Online at your convenience",
      "Virtually connect with Zoom",
      "Instant feedback",
    ],
  },
  {
    icon: <FiVideo />,
    service: "Video Tutoring",
    list: [
      "Access to personalized tutoring videos",
      "Tutoring in the comfort of your own home",
      "Video playback ability",
    ],
  },
  {
    icon: <FiUsers />,
    service: "In-Person Tutoring",
    list: ["One on one sessions", "Meet in person", "Instant feedback"],
  },
]
