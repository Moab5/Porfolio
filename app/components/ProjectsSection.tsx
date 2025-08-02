'use client';

import { motion } from 'framer-motion';

export default function ProjectsSection() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h1 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-16 text-center">
					Projects
				</motion.h1>

				<div className="space-y-16">
					{/* Mobile Chat-App */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
					>
						<div className="p-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
								<div className="space-y-6">
									<div>
										<h3 className="text-2xl font-bold mb-4">Chat App (ongoing project)</h3>
										<span className="px-3 py-1.5 m-3 bg-purple-500/10 rounded-full text-purple-400 text-xs md:text-sm">Flutter</span>
										<span className="px-3 py-1.5 m-3 bg-purple-500/10 rounded-full text-purple-400 text-xs md:text-sm">Dart</span>
										<p className="text-gray-400 mt-2">
										A beginner-level chat application, designed to showcase the fundamentals of building UIs, handling HTTP communication, and potentially modeling chat flows using flutter.
										</p>
										<a 
											href="https://github.com/Moab5/Demo_ChatApp"
											target="_blank"
											className="text-grey-300 text-sm  hover:underline inline-flex"
										>
											Available here on github
											<svg className="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
												<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
											</svg>
										</a>
									</div>

									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-blue-400">Key Features</h4>
										<ul className="space-y-2 text-sm text-gray-400">
											<li>• Clean UI Design</li>
											<li>• Cross-Platform</li>
											<li>• REST API Integration</li>
											<li>• JSON-based Data Handling</li>
										</ul>
									</div>

									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-400">Future Updates</h4>
										<ul className="space-y-2 text-sm text-gray-400">
											<li>• Real-Time Messaging</li>
											<li>• Authentication & User Management</li>
											<li>• Push Notification</li>
											<li>• App Deployment</li>
										</ul>
									</div>
								</div>

								<div className="bg-black/30 rounded-xl p-6">
									<div className="grid grid-cols-2 gap-4">
										<img src="/iPhone_Login_page.png" title="Login Page (iPhone)" className="h-90 object-contain" />
										<img src="/Chat_page_with_user.png" title="Chat Page (Android)" className="h-90 object-contain" />
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
