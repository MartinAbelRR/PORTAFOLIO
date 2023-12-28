import { Button } from "../components/buttons/Button";
import profile_1 from "../assets/profile-1.png"
import profile_2 from "../assets/profile-2.png"
import profile_3 from "../assets/profile-3.png"
import proyect from "../assets/proyect.png"

export const HomePage = () => {
  return (    
      <section className="gap-4 grid grid-adaptable min-h-screen py-6 md:grid-cols-6">
        <article className="card-1  grid group/art md:grid-cols-[1fr_300px] md:col-span-4 md:row-span-1">
          <div className="flex flex-col justify-between max-w-xl">
              <p className="label-1">
                ¡Hello World!
              </p>

            <div className="space-y-5 text-blanco">
              <h1 className="text-amarillo">I'm Martin Reyes</h1>
              <p> 
                A system engineer passionate about creating technology solutions, with experience in both <span className="font-bold text-rojo">fronted and backend development</span>.
              </p>
              <Button color={"rojo"} nameRoute={"profile"} />
            </div>
          </div>
          <figure className="group-hover/art:drop-shadow-[3px_3px_5px_#61E8E1]">
            <img
              src={profile_1}
              alt="profile"
              className="h-full max-w-[300px] mx-auto w-full"
            />
          </figure>
        </article>

        <article className="card-1 grid group/art md:grid-cols-[repeat(2,1fr)] md:col-span-2 md:row-span-1">
          <div className="flex flex-col justify-between max-w-xl">
            <div className="flex flex-wrap gap-2">
              <p className="label-1">
                Efficiency
              </p>
              <p className="label-1">
                Experience
              </p>
            </div>

            <div className="space-y-2 text-blanco">
              <h1 className="text-amarillo">Proyects</h1>
              <p>¡Discover <span className="font-bold text-celeste">my most outstanding projects</span> that I have done!</p>
              <Button />
            </div>
          </div>
          <figure className="group-hover/art:drop-shadow-[3px_3px_5px_#61E8E1]">
            <img
              src={proyect}
              alt="proyect"
              className="h-full max-w-[300px] mx-auto w-full"
            />
          </figure>
        </article>

        <article className="card-1 gap-4 grid group/art md:grid-flow-col md:col-span-3 md:row-span-4">
          <div className="flex flex-col justify-between max-w-lg">
          <div className="flex flex-wrap gap-2">
              <p className="label-1">
                HTML5
              </p>
              <p className="label-1">
                CSS3
              </p>
              <p className="label-1">
                JS
              </p>
              <p className="label-1">
                TS
              </p>
              <p className="label-1">
                React
              </p>
              <p className="label-1">
                TailwindCSSS
              </p>
              <p className="label-1">
                Go
              </p>
              <p className="label-1">
                Python
              </p>
              <p className="label-1">
                Django
              </p>
              <p className="label-1">
                Git
              </p>
              <p className="label-1">
                GitHub
              </p>
              <p className="label-1">
                SQL
              </p>
            </div>

            <div className="space-y-5 text-blanco">
              <h1 className="text-amarillo">Skills</h1>
              <p>HTML, CSS, JS, TypeScript, React, Git, GitHub. I merge technologies to create <span className="font-bold text-amarillo-oscuro">captivating and efficient digital experiences</span>.</p>
              <Button />
            </div>
          </div>
          <figure className="self-center group-hover/art:drop-shadow-[3px_3px_5px_#EAF2E3]">
            <img
              src={profile_2}
              alt="profile_2"
              className="h-[90%] max-w-[300px] mx-auto w-full"
            />
          </figure>
        </article>

        <article className="card-1 grid group/art md:grid-flow-col md:col-span-3 md:row-span-3">
          <div className="flex flex-col justify-between max-w-lg">
          <div className="flex flex-wrap gap-2 mb-3">
              <p className="label-1">
                UNMSM
              </p>
              <p className="label-1">
                Udemy
              </p>
              <p className="label-1">
                DMC
              </p>
              <p className="label-1">
                Youtube
              </p>            
            </div>

            <div className="space-y-5 text-blanco">
              <h1 className="text-amarillo">Education</h1>
              <p>
                <span className="font-bold text-celeste">Solid engineering background</span>, prepared for technological challenges.
              </p>
              <Button />
            </div>
          </div>
          <figure className="group-hover/art:drop-shadow-[3px_3px_5px_#EAF2E3]">    
            <img
              src={profile_3}
              alt="profile_3"
              className="h-full max-w-[300px] mx-auto w-full"
            />
          </figure>
        </article>

        <article className="card-1 flex items-center justify-between text-blanco md:col-start-4 md:col-end-7">
            <h1 className=" text-amarillo">Social Networking</h1>
            <Button />          
        </article>
      </section>    
  );
};
