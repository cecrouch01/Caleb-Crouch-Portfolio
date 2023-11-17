import placeholder from '../../assets/200x200.png'
import Card from '../../components/Card/Card'
import './About.css'
export default function About() {
    const array = [
        {
            title: 'Where I am at now',
            body: 'I started my journey into coding this past spring when I joined a full-stack coding boot camp. When I first started the boot camp, I learned the skills to become a Front-Stack Developer by combining vanilla javascript, HTML, and CSS. I then used those skills to create Plant Protector, an app designed to help people care for their plants. I then learned to use Node and Express to become a back-end developer. Once I learned how to create the back end of a web application, I used that skill with a team to create Course Tracker, a web application to help students organize their coursework. Once that was finished, I began learning how to use React and MongoDB. I am currently working on a fascinating project using these skills that will tie all these skills together.',
            image: placeholder
        },
        {
            title: 'Why my background in Education matters',
            body: 'In my eight years as an educator I have mentored up 150 indivdual students during a school year. As an educator I help lead students through their lifes through the act of teaching them music. As an educator, I am constantly making decisions and react to constantly changing situations. Because of this, I am used to being able to work under pressure, I know how to adapt, and I know how to stay calm when things do go as planned.',
            image: placeholder
        },
        {
            title: 'Why my background in Music matters',
            body: 'As a musician, I have learned many skills that I believe that will transfer over to becoming a developer. Of those skills, the two most important are pattern recognition and knowning how to practice. In music recognizing patterns helps you learn music faster, and since beginning my journey into web development I have found that my ability to reconize patterns has helped me become a better web developer. Learning how to practice an instrument has been directly responsible for learning how to code. Because I know how to practice, I know how to teach myself. I have the discipline necessary to sit down and tackle a concept that I don\'t understand. I understand the importance of learning fundamental skills and know how to structure learning to hone those fundamental skills.',
            image: placeholder
        },
    ]

    return (
        <>
            <h2 className='page-title'>About</h2>
            {array.map((arr, index) => {
                if(index % 2 === 0) {
                    return (
                    <Card key={index}>
                    <div className='about-card card-left'>
                        <img src={arr.image} className="card-image" />
                        <div className="card-text">
                            <h3>{arr.title}</h3>
                            <p>{arr.body}</p>
                        </div>
                    </div>
                    </Card>
                    )
                } else {
                    return (
                        <Card key={index}>
                            <div className='about-card card-right'>
                                <img src={arr.image} className="card-image" />
                                <div className="card-text">
                                    <h3>{arr.title}</h3>
                                    <p>{arr.body}</p>
                                </div>
                            </div>
                        </Card>
                    )
                }
            })}
        </>
    );
}