// Events data object array

const eventsSeed = [
    {
      eventName: "Birthday Party",
      location: "Dallas Zoo",
      description: "Jeremy Button's 5th Birthday",
      eventDateTime: "6/20/2021 2:00pm",
      attendees: [
        {
          attendee: "60aa0d362479e80938f30159",
          host: true
        },
        {
          attendee: "60aa0d362479e80938f3015a",
          host: false
        },
        {
          attendee: "60aa0d362479e80938f3015b",
          host: false
        }
      ],
      lists: [
          "60ab59f96c5eb343e8cb06f7",
          "60ab59f96c5eb343e8cb06f8"
      ],
      announcements: [
          {
            author: "60aa0d362479e80938f3015b",
            text: "Sign up to bring snacks"
          }
      ],
      comments: [
        {
          author: "60aa0d362479e80938f3015b",
          text: "The party will be fun."
        }
    ]
    }
  ];

  module.exports = eventsSeed;