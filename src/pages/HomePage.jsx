import { Button } from "../components/buttons/Button";
import profile_1 from "../assets/profile-1.png"
import profile_2 from "../assets/profile-2.png"
import profile_3 from "../assets/profile-3.png"
import proyect from "../assets/proyect.png"

export const HomePage = () => {
  return (
    <section className="gap-4 grid grid-adaptable py-2 md:grid-cols-5">
      <article className="card-1 grid group/art md:grid-cols-[1fr_200px] md:col-span-3 md:row-span-1">
        <div className="flex flex-col justify-evenly max-w-xl">
            <p className="label-1 mb-4">
              ¡Hello World!
            </p>

          <div className="space-y-2 text-blanco">
            <h1 className="text-2xl text-amarillo">I'm Martin Reyes</h1>
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
            className="max-w-[300px] mx-auto object-cover w-[80%] md:mx-0"
          />
        </figure>
      </article>

      <article className="card-1 grid group/art md:grid-cols-[repeat(2,1fr)] md:col-span-2 md:row-span-1">
        <div className="flex flex-col justify-evenly max-w-xl">
          <div className="flex flex-wrap gap-1 mb-4">
            <p className="label-1">
              Efficiency
            </p>
            <p className="label-1">
              Experience
            </p>
          </div>

          <div className="space-y-2 text-blanco">
            <h1 className="text-2xl text-amarillo">Proyects</h1>
            <p>¡Discover <span className="font-bold text-celeste">my most outstanding projects</span> that I have done!</p>
            <Button />
          </div>
        </div>
        <figure className="group-hover/art:drop-shadow-[3px_3px_5px_#61E8E1]">
          <img
            src={proyect}
            alt="proyect"
            className="max-w-[300px] mx-auto object-cover w-full md:0"
          />
        </figure>
      </article>

      <article className="card-1 gap-4 grid group/art md:grid-flow-col md:col-span-2 md:row-span-4">
        <div className="flex flex-col justify-evenly max-w-lg">
        <div className="flex flex-wrap gap-1 mb-4">
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

          <div className="space-y-2 text-blanco">
            <h1 className="text-2xl text-amarillo">Skills</h1>
            <p>I merge design and code for exceptional <span className="font-bold text-amarillo-oscuro">innovative solutions</span>.</p>
            <Button />
          </div>
        </div>
        <figure className="group-hover/art:drop-shadow-[3px_3px_5px_#EAF2E3]">
          <img
            src={profile_2}
            alt="profile_2"
            className="max-w-[300px] mx-auto object-cover w-full h-full"
          />
        </figure>
      </article>

      <article className="card-1 grid group/art md:grid-flow-col md:col-span-3 md:row-span-3">
        <div className="lex flex-col justify-evenly max-w-lg">
        <div className="flex flex-wrap gap-1 mb-3">
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

          <div className="space-y-2 text-blanco">
            <h1 className="text-2xl text-amarillo">Education</h1>
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
            className="max-w-[300px] mx-auto object-cover w-[70%]"
          />
        </figure>
      </article>

      <article className="card-1 md:col-start-3 md:col-end-6">
        <div className="flex flex-col justify-between text-blanco md:flex-row">
          <h1 className="text-amarillo">Social Networking</h1>
          <Button />
        </div>
      </article>
    </section>
  );
};
