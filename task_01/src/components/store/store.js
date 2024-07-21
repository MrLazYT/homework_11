import { createStore } from 'redux';
import { ACTION_TYPES } from './boilerPlate';

const blogs = [
    {
        id: 1,
        title: "The Rise of Quantum Computing",
        content: "Quantum computing is poised to revolutionize industries from cryptography to pharmaceuticals...",
        author: "Alice Johnson",
        published_at: "2023-03-05",
        topic: "Technology"
    },
    {
        id: 2,
        title: "Climate Change and Its Impact on Coastal Cities",
        content: "Rising sea levels are threatening coastal cities around the world. Measures to mitigate...",
        author: "John Smith",
        published_at: "2023-06-01",
        topic: "Environment"
    },
    {
        id: 3,
        title: "The Future of Artificial Intelligence",
        content: "Artificial intelligence continues to advance rapidly, with new applications in healthcare...",
        author: "Emma Brown",
        published_at: "2023-02-10",
        topic: "Technology"
    },
    {
        id: 4,
        title: "Exploring the Depths: New Discoveries in Marine Biology",
        content: "Marine biologists have uncovered new species in the depths of the ocean, revealing...",
        author: "Michael Davis",
        published_at: "2023-04-25",
        topic: "Science"
    },
    {
        id: 5,
        title: "The Economic Impact of Remote Work",
        content: "The shift to remote work has had significant economic implications, affecting everything from real estate...",
        author: "Laura Martinez",
        published_at: "2023-05-12",
        topic: "Economics"
    },
    {
        id: 6,
        title: "Advancements in Renewable Energy",
        content: "Renewable energy technologies are becoming more efficient and cost-effective, paving the way for a sustainable future...",
        author: "Daniel Lee",
        published_at: "2023-07-07",
        topic: "Energy"
    },
    {
        id: 7,
        title: "The Psychology of Happiness",
        content: "Psychologists have been studying the factors that contribute to happiness, uncovering insights into how we can improve our well-being...",
        author: "Sophia Wilson",
        published_at: "2023-01-20",
        topic: "Psychology"
    },
    {
        id: 8,
        title: "The Impact of Blockchain on Finance",
        content: "Blockchain technology is transforming the financial sector by enabling more secure and transparent transactions. Its potential applications in banking, insurance, and beyond are vast...",
        author: "Karen Thompson",
        published_at: "2023-07-10",
        topic: "Finance"
    },
    {
        id: 9,
        title: "The Cultural Impact of Social Media",
        content: "Social media has transformed the way we communicate and interact, influencing culture and society in profound ways...",
        author: "Olivia Anderson",
        published_at: "2023-03-05",
        topic: "Culture"
    },
    {
        id: 10,
        title: "The Evolution of Space Exploration",
        content: "Space exploration has evolved rapidly, with new missions to Mars and beyond sparking interest in the final frontier...",
        author: "William Harris",
        published_at: "2023-02-28",
        topic: "Space"
    },
];

const reducer = (state = blogs, action) => {
    switch (action.type)
    {
        case ACTION_TYPES.ADD:
        {
            return [
                ...state,
                action.payload
            ]
        }
        case ACTION_TYPES.EDIT:
        {
            return state.map(el => {
                if (el.id === action.payload.id)
                {
                    return action.payload;
                }
                else
                {
                    return action;
                }
            });
        }
        case ACTION_TYPES.DELETE:
        {
            return state.filter(el => el.id !== action.payload);
        }
        default:
        {
            return state;
        }
    }
}

export const store = createStore(reducer);