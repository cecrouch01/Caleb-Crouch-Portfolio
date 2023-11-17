import placeholder from '../../assets/900x400.png'
import Card from "../../components/Card/Card";
import './Project.css'
export default function Project() {
    const arr = [
        {
            title: 'Colosseum',
            stack: ['MERN'],
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate iure officiis odit asperiores fuga vitae eveniet hic. Inventore expedita deleniti ea perspiciatis nesciunt eligendi voluptatibus cupiditate et nostrum quisquam ipsum accusantium cumque quas impedit hic corporis, exercitationem consequatur sunt. Suscipit ducimus architecto animi temporibus nostrum, dolorem omnis saepe maxime assumenda.",
            image: placeholder,
            contributions: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate iure officiis odit asperiores fuga vitae eveniet hic. Inventore expedita deleniti ea perspiciatis nesciunt eligendi voluptatibus cupiditate et nostrum quisquam ipsum accusantium cumque quas impedit hic corporis, exercitationem consequatur sunt. Suscipit ducimus architecto animi temporibus nostrum, dolorem omnis saepe maxime assumenda.",
        },
        {
            title: 'Course Tracker',
            stack: ['JavaScript'],
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate iure officiis odit asperiores fuga vitae eveniet hic. Inventore expedita deleniti ea perspiciatis nesciunt eligendi voluptatibus cupiditate et nostrum quisquam ipsum accusantium cumque quas impedit hic corporis, exercitationem consequatur sunt. Suscipit ducimus architecto animi temporibus nostrum, dolorem omnis saepe maxime assumenda.",
            image: placeholder,
            contributions: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate iure officiis odit asperiores fuga vitae eveniet hic. Inventore expedita deleniti ea perspiciatis nesciunt eligendi voluptatibus cupiditate et nostrum quisquam ipsum accusantium cumque quas impedit hic corporis, exercitationem consequatur sunt. Suscipit ducimus architecto animi temporibus nostrum, dolorem omnis saepe maxime assumenda.",
        },
        {
            title: 'Plant Protector',
            stack: ['JavaScript'],
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate iure officiis odit asperiores fuga vitae eveniet hic. Inventore expedita deleniti ea perspiciatis nesciunt eligendi voluptatibus cupiditate et nostrum quisquam ipsum accusantium cumque quas impedit hic corporis, exercitationem consequatur sunt. Suscipit ducimus architecto animi temporibus nostrum, dolorem omnis saepe maxime assumenda.",
            image: placeholder,
            contributions: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate iure officiis odit asperiores fuga vitae eveniet hic. Inventore expedita deleniti ea perspiciatis nesciunt eligendi voluptatibus cupiditate et nostrum quisquam ipsum accusantium cumque quas impedit hic corporis, exercitationem consequatur sunt. Suscipit ducimus architecto animi temporibus nostrum, dolorem omnis saepe maxime assumenda.",
        },
    ]

    return (
        <>
            <h2 className="page-title" >Projects</h2>
            {arr.map((data, index) => {
                return(
                <Card key={index}>
                    <div className='project-card-contents'>
                        <h3>{data.title}</h3>
                        <ul>
                            {data.stack.map((tech, index) => {
                                return <li key={index}>{tech}</li>
                            })}
                        </ul>
                        <p>{data.description}</p>
                        <img src={data.image} />
                        <p>{data.contributions}</p>
                    </div>
                </Card>
                )
            })}
        </>
    );
}