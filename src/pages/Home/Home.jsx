import React, { Component } from 'react';
import WelcomeModal from '../../components/WelcomeModal/WelcomeModal';
import TopLevelNav from '../../components/TopLevelNav/TopLevelNav';
import './Home.scss';
import profileImage from '../../assets/images/profile.jfif';
import processImage from '../../assets/images/fire-and-ice.jfif';
import projectsImage from '../../assets/images/oceanside.jfif';
import testimonialsImage from '../../assets/images/midnight-orange3.jfif';
import blogImage from '../../assets/images/crisp-mountains.jfif';
import contactImage from '../../assets/images/unknown-dream3.jfif';

export class Home extends Component {
    state = {
        welcomeModalVisible: false,
    }

    componentDidMount() {
        this.setState({
            welcomeModalVisible: true,
        })
        const imagePreLoadList = [profileImage, processImage, projectsImage, testimonialsImage, blogImage, contactImage]
        imagePreLoadList.forEach((image) => {
            new Image().src = image
        });
    }

    componentDidUpdate(prevProps) {

    }

    updateModalVisibility = () => {
        this.setState({welcomeModalVisible: false})
        setTimeout(() => {
            document.querySelector('.app__main-nav').style.pointerEvents = 'auto';
        }, 3000);
    }

    render() {
        if (this.state.welcomeModalVisible === true) {
            return (
                <WelcomeModal visibility={this.state.welcomeModalVisible} updateModalVisibility={this.updateModalVisibility}/>
            )
        } else {
            return (
                <main className="app__main">
                    <div className="app__main-overlay"></div>
                    <div className="app__main-nav">
                        <TopLevelNav navName="profile" navDetails="A brief bio on my background" orientationTop={false} imageSrc={profileImage} colorScheme='desert'/>
                        <TopLevelNav navName="process" navDetails="An overview of my design philosophy"  orientationTop={true} imageSrc={processImage} colorScheme='fire'/>
                        <TopLevelNav navName="projects" navDetails="A showcase of some recent projects"  orientationTop={false} imageSrc={projectsImage} colorScheme='oceanside'/>
                        <TopLevelNav navName="testimonials" navDetails="Hear what others have to say"  orientationTop={true} imageSrc={testimonialsImage} colorScheme='midnight'/>
                        <TopLevelNav navName="blog" navDetails="Posts to educate or speculate"  orientationTop={false} imageSrc={blogImage} colorScheme='mountains'/>
                        <TopLevelNav navName="contact" navDetails="If you've gotten this far - let's connect"  orientationTop={true} imageSrc={contactImage} colorScheme='dream'/>
                    </div>
                </main>
            )
        }
    }
}

export default Home
