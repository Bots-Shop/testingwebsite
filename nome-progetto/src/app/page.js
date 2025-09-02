"use client";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const cursorRef = useRef(null);
  const [activeStick, setActiveStick] = useState(null);

  // Easing function
  const lerp = (start, end, amt) => (1 - amt) * start + amt * end;

  useEffect(() => {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = mouseX;
    let cursorY = mouseY;

    const cursor = cursorRef.current;
    if (!cursor) return;

    // Aggiorna posizione mouse
    function onMouseMove(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }

    window.addEventListener("mousemove", onMouseMove);

    // Animazione cursore
    function animate() {
      cursorX = lerp(cursorX, mouseX, 0.15);
      cursorY = lerp(cursorY, mouseY, 0.15);
      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
      requestAnimationFrame(animate);
    }
    animate();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  // Magnetismo su elementi "stick"
  const onMouseEnterStick = (e) => {
    setActiveStick(e.currentTarget);
  };

  const onMouseLeaveStick = () => {
    if (activeStick) {
      activeStick.style.transform = "";
      setActiveStick(null);
    }
  };

  const onMouseMoveStick = (e) => {
    if (!activeStick) return;

    const rect = activeStick.getBoundingClientRect();
    const relX = e.clientX - rect.left;
    const relY = e.clientY - rect.top;
    const moveX = (relX - rect.width / 2) * 0.2;
    const moveY = (relY - rect.height / 2) * 0.2;

    activeStick.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
  };

  return (
    <>
      <style>{`
        body {
          cursor: none;
          background: #0f0f0f;
          color: #e0e0e0;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          min-height: 100vh;
          margin: 0;
          padding: 0;
        }
        a {
          color: #39ff14;
          text-decoration: none;
          cursor: pointer;
        }
        a:hover {
          text-decoration: underline;
        }
      `}</style>

      <div className="container mx-auto max-w-3xl p-6">
        <h1
          className="text-4xl font-extrabold mb-4 tracking-widest text-[#39ff14] inline-block"
          onMouseEnter={onMouseEnterStick}
          onMouseLeave={onMouseLeaveStick}
          onMouseMove={onMouseMoveStick}
        >
          Frig.dev Clone
        </h1>
        <p
          className="mb-6 text-gray-300 max-w-prose inline-block"
          onMouseEnter={onMouseEnterStick}
          onMouseLeave={onMouseLeaveStick}
          onMouseMove={onMouseMoveStick}
        >
          Benvenuto nel mio sito personale. Qui puoi trovare informazioni sulle
          mie competenze e progetti.
        </p>

        <section>
          <h2
            className="text-2xl font-bold border-b-2 border-[#39ff14] pb-1 mb-4 inline-block"
            onMouseEnter={onMouseEnterStick}
            onMouseLeave={onMouseLeaveStick}
            onMouseMove={onMouseMoveStick}
          >
            About
          </h2>
          <p
            className="mb-6 max-w-prose text-gray-400"
            onMouseEnter={onMouseEnterStick}
            onMouseLeave={onMouseLeaveStick}
            onMouseMove={onMouseMoveStick}
          >
            Sono uno sviluppatore full-stack con esperienza in frontend, backend
            e DevOps. Amo creare siti web eleganti, performanti e con ottima UX.
          </p>
        </section>

        <section className="mb-10">
          <h2
            className="text-2xl font-bold border-b-2 border-[#39ff14] pb-1 mb-6 inline-block"
            onMouseEnter={onMouseEnterStick}
            onMouseLeave={onMouseLeaveStick}
            onMouseMove={onMouseMoveStick}
          >
            Skills
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                title: "Frontend",
                skills: [
                  "React.js",
                  "Next.js",
                  "Tailwind CSS",
                  "Vue.js",
                  "HTML5 & CSS3",
                ],
              },
              {
                title: "Backend",
                skills: [
                  "Node.js",
                  "Express.js",
                  "Python (Django, Flask)",
                  "GraphQL",
                  "REST API",
                ],
              },
              {
                title: "DevOps & Tools",
                skills: [
                  "Docker & Kubernetes",
                  "Git & GitHub",
                  "CI/CD (GitHub Actions)",
                  "AWS & Azure",
                  "Linux Server",
                ],
              },
            ].map(({ title, skills }) => (
              <div
                key={title}
                className="bg-[#1a1a1a] border border-[#39ff14] rounded-md p-6 cursor-pointer inline-block"
                onMouseEnter={onMouseEnterStick}
                onMouseLeave={onMouseLeaveStick}
                onMouseMove={onMouseMoveStick}
              >
                <h3 className="mb-4 font-semibold">{title}</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  {skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2
            className="text-2xl font-bold border-b-2 border-[#39ff14] pb-1 mb-4 inline-block"
            onMouseEnter={onMouseEnterStick}
            onMouseLeave={onMouseLeaveStick}
            onMouseMove={onMouseMoveStick}
          >
            Contatti
          </h2>
          <p
            className="mb-2"
            onMouseEnter={onMouseEnterStick}
            onMouseLeave={onMouseLeaveStick}
            onMouseMove={onMouseMoveStick}
          >
            Email:{" "}
            <a href="mailto:tuoemail@example.com" className="underline">
              tuoemail@example.com
            </a>
          </p>
          <p
            onMouseEnter={onMouseEnterStick}
            onMouseLeave={onMouseLeaveStick}
            onMouseMove={onMouseMoveStick}
          >
            GitHub:{" "}
            <a
              href="https://github.com/tuousername"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              github.com/tuousername
            </a>
          </p>
        </section>
      </div>

      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 pointer-events-none bg-[#39ff14cc] rounded-full mix-blend-difference z-50 transition-transform duration-150 ease-out`}
        style={{ width: 40, height: 40, transform: "translate(-50%, -50%)" }}
      />
      {/* Active cursor enlarge */}
      {activeStick && (
        <style>{`
          div[ref] {
            width: 80px !important;
            height: 80px !important;
            background: #39ff14 !important;
            mix-blend-mode: normal !important;
            transform: translate(-50%, -50%) scale(1.5) !important;
          }
        `}</style>
      )}
    </>
  );
}
