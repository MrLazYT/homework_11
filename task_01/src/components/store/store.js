import { createStore } from 'redux';
import { ACTION_TYPES } from './boilerPlate';

const blogs = [
    {
        id: 1,
        title: "Rep. Ted Lieu becomes first member of House Democratic leadership to endorse Harris",
        content: "Quantum computing is poised to revolutionize industries from cryptography to pharmaceuticals. With its ability to process complex calculations at unprecedented speeds, quantum computing holds the potential to solve problems that are currently intractable for classical computers. This technology could lead to breakthroughs in drug discovery, financial modeling, and even climate simulations, opening up new frontiers for scientific and technological advancement. As researchers continue to develop quantum algorithms and improve qubit stability, the dream of practical quantum computers is becoming a reality. Companies and governments worldwide are investing heavily in quantum research, recognizing its transformative potential. However, the path to widespread adoption is fraught with challenges, including error correction, scalability, and the need for a new generation of quantum programming languages. Despite these hurdles, the progress in quantum computing over the past decade has been nothing short of remarkable. The future holds exciting possibilities as we stand on the brink of a quantum revolution.",
        author: "Alice Johnson",
        published_at: "2023-03-05",
        topic: "Technology"
    },
    {
        id: 2,
        title: "Climate Change and Its Impact on Coastal Cities",
        content: "Rising sea levels are threatening coastal cities around the world. Measures to mitigate the impact of climate change include building sea walls, restoring mangroves, and improving urban drainage systems. These efforts are critical to protect millions of people living in vulnerable areas and to ensure the sustainability of coastal economies that depend on tourism, fishing, and trade. In addition to physical infrastructure, communities are implementing policies to reduce carbon emissions and promote sustainable development. These include transitioning to renewable energy sources, enhancing public transportation systems, and encouraging green building practices. The success of these initiatives depends on global cooperation and local action, highlighting the need for a comprehensive approach to tackling climate change. As cities adapt to these changes, the resilience of their infrastructure and communities will be key to weathering the storm. The challenge is immense, but with innovation, commitment, and collaboration, a sustainable future is within reach.",
        author: "John Smith",
        published_at: "2023-06-01",
        topic: "Environment"
    },
    {
        id: 3,
        title: "The Future of Artificial Intelligence",
        content: "Artificial intelligence continues to advance rapidly, with new applications in healthcare, autonomous vehicles, and personalized marketing. AI is not only transforming industries but also raising ethical and societal questions about job displacement, privacy, and decision-making processes. As AI becomes more integrated into daily life, ongoing research and dialogue are essential to harness its benefits while mitigating potential risks. In healthcare, AI-driven diagnostic tools are enhancing the accuracy and speed of disease detection, while AI-powered robots are assisting in surgeries and patient care. In transportation, self-driving cars are reducing traffic accidents and improving mobility for the elderly and disabled. However, the rapid adoption of AI also brings challenges, such as the need for robust data security measures and the creation of ethical guidelines to govern AI use. Governments, industries, and academia must work together to develop policies and frameworks that ensure AI technologies are used responsibly and equitably. The future of AI holds immense promise, and with thoughtful management, it can be a force for good in society.",
        author: "Emma Brown",
        published_at: "2023-02-10",
        topic: "Technology"
    },
    {
        id: 4,
        title: "Exploring the Depths: New Discoveries in Marine Biology",
        content: "Marine biologists have uncovered new species in the depths of the ocean, revealing the incredible biodiversity of marine ecosystems. These discoveries highlight the importance of protecting our oceans from threats like pollution, overfishing, and climate change. The study of these newly discovered species can provide insights into evolutionary processes and the resilience of marine life in extreme environments. Recent expeditions have explored previously uncharted areas, uncovering species that exhibit unique adaptations to their deep-sea habitats. These findings are crucial for understanding the complex interactions within marine ecosystems and the impact of human activities on these environments. Conservation efforts are vital to preserve the delicate balance of oceanic life and to ensure that future generations can continue to benefit from the ocean's resources. Collaborative international research and stringent environmental policies are needed to address the challenges facing our oceans. By raising awareness and promoting sustainable practices, we can help protect these vital ecosystems for the future.",
        author: "Michael Davis",
        published_at: "2023-04-25",
        topic: "Science"
    },
    {
        id: 5,
        title: "The Economic Impact of Remote Work",
        content: "The shift to remote work has had significant economic implications, affecting everything from real estate markets to business travel. Companies are re-evaluating their office space needs, leading to a decline in demand for commercial real estate in urban centers. Meanwhile, local economies in suburban and rural areas are experiencing growth as more people work from home. This trend is reshaping the economic landscape in profound ways. Remote work has also influenced the labor market, offering greater flexibility for employees and broadening the talent pool for employers. However, it has also highlighted disparities in access to reliable internet and suitable home office environments. Businesses are investing in technology and support systems to facilitate remote work, while policymakers are considering regulations to protect remote workers' rights. The long-term impact of remote work on productivity, innovation, and work-life balance is still being studied. As we navigate this new work paradigm, it is essential to address these challenges and seize the opportunities for creating a more flexible and inclusive workforce.",
        author: "Laura Martinez",
        published_at: "2023-05-12",
        topic: "Economics"
    },
    {
        id: 6,
        title: "Advancements in Renewable Energy",
        content: "Renewable energy technologies are becoming more efficient and cost-effective, paving the way for a sustainable future. Innovations in solar, wind, and hydroelectric power are reducing our reliance on fossil fuels and lowering greenhouse gas emissions. As the global demand for energy continues to rise, investing in renewable energy infrastructure is crucial to addressing climate change and ensuring energy security. Governments and private companies are committing significant resources to the development of clean energy projects. Breakthroughs in battery storage and grid integration are enhancing the reliability and scalability of renewable energy systems. In addition, advancements in bioenergy and geothermal technologies are expanding the portfolio of sustainable energy sources. Public awareness and support for renewable energy are also growing, driving policy changes and encouraging sustainable practices. The transition to a green economy offers economic opportunities and environmental benefits, making it a vital component of a sustainable future. By continuing to innovate and invest in renewable energy, we can build a resilient and sustainable energy system for generations to come.",
        author: "Daniel Lee",
        published_at: "2023-07-07",
        topic: "Energy"
    },
    {
        id: 7,
        title: "The Psychology of Happiness",
        content: "Psychologists have been studying the factors that contribute to happiness, uncovering insights into how we can improve our well-being. Research suggests that strong social connections, a sense of purpose, and regular physical activity are key components of a happy life. By understanding these factors, individuals can make positive changes to enhance their mental health and overall happiness. Studies have shown that gratitude practices, mindfulness, and engaging in activities that align with personal values can significantly boost happiness levels. Additionally, fostering positive relationships and community involvement are crucial for emotional well-being. Mental health professionals are incorporating these findings into therapeutic approaches, helping clients build happier and more fulfilling lives. As our understanding of happiness grows, it is important to promote mental health awareness and access to resources. Encouraging a balanced lifestyle that includes physical, emotional, and social well-being can lead to a more content and resilient society.",
        author: "Sophia Wilson",
        published_at: "2023-01-20",
        topic: "Psychology"
    },
    {
        id: 8,
        title: "The Impact of Blockchain on Finance",
        content: "Blockchain technology is transforming the financial sector by enabling more secure and transparent transactions. Its potential applications in banking, insurance, and beyond are vast. Blockchain can help reduce fraud, improve data integrity, and streamline processes, leading to increased efficiency and trust in financial systems. As the technology matures, it is likely to play a critical role in the future of finance. Financial institutions are exploring blockchain for everything from cross-border payments to smart contracts, which can automate and enforce contractual agreements. Cryptocurrencies, a popular application of blockchain, are challenging traditional financial models and offering new investment opportunities. However, the widespread adoption of blockchain technology faces regulatory, scalability, and interoperability challenges. Collaboration between stakeholders is essential to address these issues and unlock the full potential of blockchain. By fostering innovation and creating a supportive regulatory environment, the financial industry can harness the benefits of blockchain technology to drive growth and efficiency.",
        author: "Karen Thompson",
        published_at: "2023-07-10",
        topic: "Finance"
    },
    {
        id: 9,
        title: "The Cultural Impact of Social Media",
        content: "Social media has undeniably reshaped the landscape of communication and social interaction, permeating every aspect of modern life. Platforms like Facebook, Twitter, Instagram, and TikTok have transformed how we connect with others, share information, and even perceive ourselves. This shift has sparked both excitement and concern across various sectors of society. In the realm of personal communication, social media allows people to stay in touch with friends and family across vast distances, fostering relationships that might otherwise dwindle. It provides a space for individuals to express themselves, share experiences, and find communities of like-minded individuals. For many, these platforms are a source of support and a means to connect with others who understand their struggles and triumphs. However, the impact of social media extends beyond personal interactions. It has significant implications for culture and society at large. Social media platforms are now central to the dissemination of information and the shaping of public opinion. Viral content can influence trends, drive social movements, and even sway political decisions. The rapid spread of information can also lead to misinformation, as false narratives and conspiracy theories can gain traction just as quickly as credible news. Moreover, social media has altered the way we consume and engage with content. Traditional media outlets, such as newspapers and television, have had to adapt to the new digital landscape, often by integrating social media strategies into their operations. This shift has changed the way news is reported and consumed, with an emphasis on immediacy and user engagement. On a more personal level, the impact of social media on mental health is a growing area of concern. While these platforms can offer a sense of belonging and community, they can also contribute to feelings of inadequacy, anxiety, and depression. The constant comparison to others and the pressure to curate a perfect online persona can take a toll on one's well-being. As social media continues to evolve, its cultural impact will undoubtedly expand. The challenge for individuals and society will be to navigate this new digital landscape in a way that harnesses the benefits while mitigating the potential downsides. The way we use and perceive social media will shape our culture and society for years to come.",
        author: "Olivia Anderson",
        published_at: "2023-03-05",
        topic: "Culture"
    },
    {
        id: 10,
        title: "The Evolution of Space Exploration",
        content: "Space exploration has come a long way since the early days of humanity’s quest to reach the stars. From the historic Apollo missions to the burgeoning era of private spaceflight, the journey has been marked by remarkable achievements and ambitious goals. The initial phase of space exploration was defined by a race to the moon. The Cold War rivalry between the United States and the Soviet Union led to a series of high-stakes missions, culminating in the Apollo 11 landing in 1969. Neil Armstrong's iconic first steps on the lunar surface symbolized a triumph of human ingenuity and a new era of exploration. As we moved into the latter part of the 20th century, space exploration expanded beyond lunar missions. The development of space stations like Skylab and the International Space Station (ISS) marked a new focus on long-term human habitation and scientific research in orbit. The ISS, in particular, has become a symbol of international cooperation, bringing together astronauts from various countries to conduct experiments and advance our understanding of space. In recent years, space exploration has entered a new chapter with the involvement of private companies. Companies like SpaceX, Blue Origin, and Virgin Galactic are leading the charge in commercial spaceflight, aiming to make space more accessible to private individuals and businesses. SpaceX’s ambitious plans include missions to Mars and beyond, with the goal of establishing a human presence on the Red Planet. The exploration of Mars is a key focus of current missions, with rovers like Perseverance and Curiosity providing valuable data about the planet’s surface and potential for life. These missions are not only seeking signs of past microbial life but also laying the groundwork for future human exploration. Looking ahead, the future of space exploration promises even more exciting developments. Plans for lunar bases, asteroid mining, and interplanetary travel are on the horizon. As technology advances and our understanding of space deepens, the possibilities for exploration are expanding, offering the potential for new discoveries and the continued push to explore the final frontier. The evolution of space exploration reflects humanity's enduring curiosity and drive to explore the unknown. Each milestone in this journey brings us closer to unlocking the mysteries of the universe and understanding our place within it. The coming years will undoubtedly bring further advancements and inspire future generations to reach for the stars.",
        author: "William Harris",
        published_at: "2023-02-28",
        topic: "Space"
    },
];

let next_id = 11;

const reducer = (state = blogs, action) => {
    switch (action.type)
    {
        case ACTION_TYPES.ADD:
        {
            return [
                ...state,
                {
                    ...action.payload,
                    id: next_id++
                }
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
                    return el;
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