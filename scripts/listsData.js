// Events data object array

const listsSeed = [
    {
        listName: "Food",
        EventId: "60ab7cc5b187cc4ca86b22d1",
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
                assignedTo: "60aa0d362479e80938f30159",
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
];

  module.exports = listsSeed;