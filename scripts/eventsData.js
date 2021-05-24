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
        {
            listName: "Food",
            items: [
                {
                    itemName: "Cake",
                    assignedTo: "60aa0d362479e80938f30159",
                    status: "ordered"
                },
                {
                    itemName: "Fruit",
                    assignedTo: "60aa0d362479e80938f30159",
                    status: "ordered"
                },
                {
                    itemName: "Snacks",
                    assignedTo: "",
                    status: "open"
                }
            ]
        },
        {
            listName: "Supplies",
            items: [
                {
                    itemName: "Party hats",
                    assignedTo: "60aa0d362479e80938f3015b",
                    status: "done"
                },
                {
                    itemName: "Paper plates",
                    assignedTo: "60aa0d362479e80938f30159",
                    status: "done"
                },
                {
                    itemName: "Napkins",
                    assignedTo: "60aa0d362479e80938f30159",
                    status: "done"
                }
            ]
        }
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