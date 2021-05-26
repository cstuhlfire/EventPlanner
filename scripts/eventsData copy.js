// Events data object array

const eventsSeed = [
    {
      eventName: "Birthday Party",
      location: "Dallas Zoo",
      description: "Jeremy Button's 5th Birthday",
      eventImage: "/images/balloons.jpg",
      eventDateTime: "6/20/2021 4:00pm",
      attendees: [
        {
          attendee: "60ad39ee1f302f159cf8774c",
          host: true
        },
        {
          attendee: "60ad39ee1f302f159cf8774d",
          host: false
        },
        {
          attendee: "60ad39ee1f302f159cf8774e",
          host: false
        }
      ],
      lists: [
        {
            listName: "Food",
            items: [
                {
                    itemName: "Cake",
                    assignedTo: "60ad39ee1f302f159cf8774c",
                    status: "ordered",
                    assigned: true
                },
                {
                    itemName: "Fruit",
                    assignedTo: "60ad39ee1f302f159cf8774e",
                    status: "ordered",
                    assigned: true
                },
                {
                    itemName: "Snacks",
                    assignedTo: "60ad39ee1f302f159cf8774c",
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
                    assignedTo: "60ad39ee1f302f159cf8774c",
                    status: "done",
                    assigned: true
                },
                {
                    itemName: "Paper plates",
                    assignedTo: "60ad39ee1f302f159cf8774c",
                    status: "done",
                    assigned: true
                },
                {
                    itemName: "Napkins",
                    assignedTo: "60ad39ee1f302f159cf8774c",
                    status: "done",
                    assigned: true
                }
            ]
        }
      ],
      announcements: [
          {
            author: "60ad39ee1f302f159cf8774c",
            text: "Sign up to bring snacks"
          }
      ],
      comments: [
        {
          author: "60ad39ee1f302f159cf8774c",
          text: "The party will be fun."
        }
    ]
    },
    {
      eventName: "Graduation",
      location: "The Tavern",
      description: "Big fun grad party",
      eventImage: "/images/balloons.jpg",
      eventDateTime: "6/20/2021 4:00pm",
      attendees: [
        {
          attendee: "60ad39ee1f302f159cf8774e",
          host: true
        },
        {
          attendee: "60ad39ee1f302f159cf8774f",
          host: false
        },
        {
          attendee: "60ad39ee1f302f159cf87750",
          host: false
        }
      ],
      lists: [
        {
            listName: "Food",
            items: [
                {
                    itemName: "Cake",
                    assignedTo: "60ad39ee1f302f159cf8774e",
                    status: "ordered",
                    assigned: true
                },
                {
                    itemName: "Fruit",
                    assignedTo: "60ad39ee1f302f159cf8774e",
                    status: "ordered",
                    assigned: true
                },
                {
                    itemName: "Snacks",
                    assignedTo: "60ad39ee1f302f159cf87750",
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
                    assignedTo: "60ad39ee1f302f159cf8774f",
                    status: "done",
                    assigned: true
                },
                {
                    itemName: "Paper plates",
                    assignedTo: "60ad39ee1f302f159cf8774f",
                    status: "done",
                    assigned: true
                },
                {
                    itemName: "Napkins",
                    assignedTo: "60ad39ee1f302f159cf87750",
                    status: "done",
                    assigned: true
                }
            ]
        }
      ],
      announcements: [
          {
            author: "60ad39ee1f302f159cf8774e",
            text: "Announcement 1"
          },
          {
            author: "60ad39ee1f302f159cf8774e",
            text: "Announcement 2"
          },
          {
            author: "60ad39ee1f302f159cf8774e",
            text: "Announcement 3"
          }
      ],
      comments: [
        {
          author: "60ad39ee1f302f159cf8774c",
          text: "The party will be fun."
        }
    ]
    }
  ];

  module.exports = eventsSeed;