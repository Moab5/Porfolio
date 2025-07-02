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
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-6">
									<div>
										<h3 className="text-2xl font-bold mb-4">Chat App (ongoing project)</h3>
										<p className="text-gray-400">
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
									<h4 className="text-sm font-semibold text-gray-400 mb-4">System Architecture</h4>
									<div className="aspect-[4/3] bg-black/50 rounded-lg p-4">
										{/* Add detailed system architecture diagram here */}
										<svg className="w-full h-full" viewBox="0 0 400 300">
											{/* Client Layer */}
											<g>
												<rect x="20" y="20" width="360" height="40" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
												<text x="200" y="45" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Mobile App
												</text>
											</g>

											{/* Cache Layer */}
											<g>
												<rect x="20" y="140" width="360" height="30" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
												<text x="200" y="160" textAnchor="middle" className="fill-gray-400 text-[12px]">
													REST + WebSocket|Firebase SDK
												</text>
											</g>

											{/* Database Layer */}
											<g>
												<rect x="20" y="190" width="170" height="40" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
												<rect x="210" y="190" width="170" height="40" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
												<text x="105" y="215" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Real-Time DB/API (Node.js)
												</text>
												<text x="295" y="215" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Firebase Services
												</text>
											</g>

											{/* Search Layer */}
											<g>
												<rect x="20" y="250" width="360" height="30" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
												<text x="200" y="270" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Database
												</text>
											</g>

											{/* Connection Lines */}
											<g className="stroke-gray-600" strokeWidth="1">
												<line x1="200" y1="60" x2="200" y2="80" />
												<line x1="105" y1="120" x2="105" y2="140" />
												<line x1="295" y1="120" x2="295" y2="140" />
												<line x1="105" y1="170" x2="105" y2="190" />
												<line x1="295" y1="170" x2="295" y2="190" />
												<line x1="200" y1="230" x2="200" y2="250" />
											</g>
										</svg>
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
