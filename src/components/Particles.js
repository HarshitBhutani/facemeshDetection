import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";  
import { loadFull } from "tsparticles";  
import { useCallback, useMemo } from "react";

const ParticlesComponent = ()=> {
    const options = useMemo(()=> {
        return {
            interactivity: {
                events: {
                    onClick: {
                        enable: true, // enables the click event
                        mode: "push"
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse"
                    }
                }
            },
            modes: {
                push:{
                    quantity: 10,
                },
                repulse:{
                    distance: 10,
                    radius:10
                }
                },
            
            particles: {
                links:{
                    enable: true,
                    distance: 170
                },
                move: {
                    enable: true,
                    speed: {min :1, max:3}
                },
                opacity: {
                    value: {min: 0.7, max: 1}
                },
                size: {
                    value: {min:1 , max:5}
                }
            }
        };
    }, []);

    const particlesInit = useCallback((engine) =>{
        // loadSlim(engine);
        loadFull(engine);
    }, []);

    return <Particles init={particlesInit} options={options} />;
};

export default ParticlesComponent;