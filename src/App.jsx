import React from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-900 font-sans">
      <Header />
      <Intro />
      {/* Work Experience */}
      <section id="experience" className="bg-white py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Work Experience</h2>
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-lg">Mental Health Professional</h3>
              <span className="text-gray-600">McLean-Franciscan | 2024–Present</span>
              <ul className="list-disc ml-6 mt-2 text-gray-700">
                <li>Provide clinical care and behavioral support for youth and families in a hospital setting.</li>
                <li>Collaborate with interdisciplinary teams to deliver evidence-based interventions.</li>
                <li>Support research and quality improvement initiatives in mental health care.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Wealth Management Intern</h3>
              <span className="text-gray-600">UBS | 2018</span>
              <ul className="list-disc ml-6 mt-2 text-gray-700">
                <li>Assisted with client portfolio analysis and financial research.</li>
                <li>Supported senior advisors in preparing presentations and reports.</li>
                <li>Engaged in compliance and risk management projects.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Wealth Management Intern</h3>
              <span className="text-gray-600">Morgan Stanley | 2017</span>
              <ul className="list-disc ml-6 mt-2 text-gray-700">
                <li>Conducted market research and data analysis for client accounts.</li>
                <li>Prepared investment proposals and supported client communications.</li>
                <li>Participated in team meetings and professional development workshops.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-5xl mx-auto my-12 px-4">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Skills</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-2">Technical & Analytical</h3>
            <ul className="list-disc ml-6 text-gray-700">
              <li>Data Analysis (Python, R, SPSS, Excel)</li>
              <li>Statistical Modeling & Visualization</li>
              <li>Survey Design & Digital Research Methods</li>
              <li>Web Development (React, Tailwind CSS, Vite)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Behavioral & Clinical</h3>
            <ul className="list-disc ml-6 text-gray-700">
              <li>Behavioral Science & Risk Analysis</li>
              <li>Digital Health & Cyberpsychology</li>
              <li>Clinical Interviewing & Assessment</li>
              <li>Program Evaluation</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Digital Research & Ethics</h3>
            <ul className="list-disc ml-6 text-gray-700">
              <li>Digital Ethics & Privacy</li>
              <li>Human Subjects Research (IRB, HIPAA)</li>
              <li>Open Science & Reproducibility</li>
              <li>Data Security & Compliance</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Professional & Interpersonal</h3>
            <ul className="list-disc ml-6 text-gray-700">
              <li>Project Management</li>
              <li>Scientific Writing & Communication</li>
              <li>Team Leadership & Collaboration</li>
              <li>Stakeholder Engagement</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-white py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Projects</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg">Behavioral Risk and Ethics Research</h3>
              <p className="text-gray-700">Research on digital risk, behavioral health, and ethical frameworks for technology and society.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Psyber Nexus</h3>
              <a href="https://psybernexus.com" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded font-medium underline">psybernexus.com</a>
              <p className="text-gray-700">A digital research platform for behavioral science, supporting secure, ethical, and innovative research in digital health and psychology.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">JGWalsh.net Portfolio</h3>
              <a href="https://jgwalsh.net" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded font-medium underline">jgwalsh.net</a>
              <p className="text-gray-700">Personal website and portfolio showcasing research, projects, and professional profile.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="max-w-5xl mx-auto my-12 px-4">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Education</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg">Graduate Coursework</h3>
            <span className="text-gray-600">Boston University / Harvard Extension School</span>
          </div>
          <div>
            <h3 className="font-semibold text-lg">BA, Psychology</h3>
            <span className="text-gray-600">Siena College</span>
          </div>
        </div>
      </section>

      {/* Additional Leadership */}
      <section id="leadership" className="bg-white py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Additional Leadership</h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>Siena Rugby athlete and alumni association member</li>
          </ul>
        </div>
      </section>

      {/* Contact Information */}
      <section id="contact" className="max-w-5xl mx-auto my-12 px-4">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Contact Information</h2>
        <div className="flex flex-wrap gap-3 items-center">
          <a href="https://www.linkedin.com/in/jgregorywalsh/" target="_blank" rel="noopener noreferrer" className="bg-blue-700 text-white px-3 py-1 rounded font-medium hover:bg-blue-800 transition">LinkedIn</a>
          <a href="mailto:jgwalsh@bu.edu" className="bg-gray-200 text-blue-700 px-3 py-1 rounded font-medium hover:bg-blue-100 transition">BU Email</a>
          <a href="mailto:jwalsh@siena.edu" className="bg-gray-200 text-blue-700 px-3 py-1 rounded font-medium hover:bg-blue-100 transition">Siena Email</a>
          <a href="https://github.com/jgregorywalsh" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white px-3 py-1 rounded font-medium hover:bg-gray-900 transition">GitHub</a>
          <a href="https://jgwalsh.net" target="_blank" rel="noopener noreferrer" className="bg-blue-100 text-blue-700 px-3 py-1 rounded font-medium hover:bg-blue-200 transition">jgwalsh.net</a>
          <a href="https://psybernexus.com" target="_blank" rel="noopener noreferrer" className="bg-blue-100 text-blue-700 px-3 py-1 rounded font-medium hover:bg-blue-200 transition">psybernexus.com</a>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default App
