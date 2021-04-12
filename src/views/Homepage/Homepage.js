import React from 'react';
import './Homepage.css';

import ProjectCard from '../../components/ProjectCard/ProjectCard';
import GlowyBtn from '../../components/GlowyBtn/GlowyBtn';
import ArticleCard from '../../components/ArticleCard/ArticleCard';

const HeaderDivider = () => {
    return (
        <div className="divider">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
            </svg>
        </div>
    );
}

const Homepage = () => {
    return (
        <div>
            <div className="Hero">
                <div className="HeroGroup">
                    <h1>Samuele Allegranza</h1>
                    <p>SW developer // Perpetual learner</p>
                    <GlowyBtn href="https://google.it/" text="About me" />
                </div>
                <HeaderDivider/>
            </div>

            <div className={`${"Projects"} ${"HomeSection"}`}>
                <h2>Latest Projects</h2>
                <div className="ProjectsGroup">
                    <ProjectCard title="energy-metrics" desc="A cloud service for home's energy I/O monitoring."/>
                    <ProjectCard title="esp32-leds"     desc="Control your led strips wirelessly connected to your local Wi-Fi with a Webapp"/>
                    <ProjectCard title="bike-guard"     desc="Control your led strips wirelessly connected to your local Wi-Fi with a Webapp"/>
                    <ProjectCard title="U-modbus"       desc="A python library that helps people connecting modbus devices to a RaspberryPi"/>
                </div>
                <GlowyBtn href="https://google.it/" text="Explore" />
           </div>

            <div className={`${"Articles"} ${"HomeSection"}`}>
                <h2>Recent Writings</h2>
                <div className="ArticlesGroup">
                    <ArticleCard
                        title="ESP32 Programming - How to start with Espressif IDF"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        tags={["Hardware", "IOT", "Programming"]}
                        img="esp32.jpeg"
                    />
                    <ArticleCard
                        title="ESP32 Programming - How to start with Espressif IDF"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        tags={["Hardware", "IOT", "Programming"]}
                        img="webapp.jpg"
                    />
                </div>
                <GlowyBtn href="https://google.it/" text="Read More" />
            </div>
        </div>
    );
};

export default Homepage;