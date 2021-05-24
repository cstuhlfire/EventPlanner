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
                    status: "ordered",
                    assigned: true
                },
                {
                    itemName: "Fruit",
                    assignedTo: "60aa0d362479e80938f30159",
                    status: "ordered",
                    assigned: true
                },
                {
                    itemName: "Snacks",
                    assignedTo: "60aa0d362479e80938f30159",
                    status: "open",
                    assigned: false
                }
            ]
        },
        {
            listName: "Supplies",
            items: [
                {
                    itemName: "Party hats",
                    assignedTo: "60aa0d362479e80938f3015b",
                    status: "done",
                    assigned: true
                },
                {
                    itemName: "Paper plates",
                    assignedTo: "60aa0d362479e80938f30159",
                    status: "done",
                    assigned: true
                },
                {
                    itemName: "Napkins",
                    assignedTo: "60aa0d362479e80938f30159",
                    status: "done",
                    assigned: true
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