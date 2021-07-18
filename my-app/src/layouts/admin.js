import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const LayoutAdmin = ({ children }) => {
    const [isShow, setIsShow] = useState(false)
    return (
        <div>
            <div>
                <nav className="tw-bg-gray-800">
                    <div className="tw-max-w-7xl tw-mx-auto tw-px-4 sm:tw-px-6 lg:tw-px-8">
                        <div className="tw-flex tw-items-center tw-justify-between tw-h-16">
                            <div className="tw-flex tw-items-center">
                                <div className="tw-flex-shrink-0">
                                    <img className="tw-h-8 tw-w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
                                </div>
                                <div className="tw-hidden md:tw-block">
                                    <div className="tw-ml-10 tw-flex tw-items-baseline tw-space-x-4">
                                        {/* Current: "tw-bg-gray-900 tw-text-white", Default: "tw-text-gray-300 hover:tw-bg-gray-700 hover:tw-text-white" */}
                                        <NavLink to="/" className="tw-bg-gray-900 tw-text-white tw-px-3 tw-py-2 tw-rounded-md tw-text-sm tw-font-medium">Home</NavLink>
                                        <NavLink to="/admin/dashboard" className="tw-text-gray-300 hover:tw-bg-gray-700 hover:tw-text-white tw-px-3 tw-py-2 tw-rounded-md tw-text-sm tw-font-medium">Dashboard</NavLink>
                                        <NavLink to="/admin/product" className="tw-text-gray-300 hover:tw-bg-gray-700 hover:tw-text-white tw-px-3 tw-py-2 tw-rounded-md tw-text-sm tw-font-medium">Product</NavLink>
                                        <NavLink to="/admin/categories" className="tw-text-gray-300 hover:tw-bg-gray-700 hover:tw-text-white tw-px-3 tw-py-2 tw-rounded-md tw-text-sm tw-font-medium">Category</NavLink>

                                    </div>
                                </div>
                            </div>
                            <div className="tw-hidden md:tw-block">
                                <div className="tw-ml-4 tw-flex tw-items-center md:tw-ml-6">
                                    <button className="tw-bg-gray-800 tw-p-1 tw-rounded-full tw-text-gray-400 hover:tw-text-white focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-offset-2 focus:tw-ring-offset-gray-800 focus:tw-ring-white">
                                        <span className="tw-sr-only">View notifications</span>
                                        {/* Heroicon name: outline/bell */}
                                        <svg className="tw-h-6 tw-w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                        </svg>
                                    </button>
                                    {/* Profile dropdown */}
                                    <div className="tw-ml-3 tw-relative">
                                        <div>
                                            <button type="button" className="tw-max-w-xs tw-bg-gray-800 tw-rounded-full tw-flex tw-items-center tw-text-sm focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-offset-2 focus:tw-ring-offset-gray-800 focus:tw-ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                                <span className="tw-sr-only">Open user menu</span>
                                                <img className="tw-h-8 tw-w-8 tw-rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt />
                                            </button>
                                        </div>

                                        {isShow ? <div>
                                            {/* Active: "tw-bg-gray-100", Not Active: "" */}
                                            <a href="#" className="tw-block tw-px-4 tw-py-2 tw-text-sm tw-text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-0">Your Profile</a>
                                            <a href="#" className="tw-block tw-px-4 tw-py-2 tw-text-sm tw-text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-1">Settings</a>
                                            <a href="#" className="tw-block tw-px-4 tw-py-2 tw-text-sm tw-text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-2">Sign out</a>
                                        </div> : ''}
                                    </div>
                                </div>
                            </div>
                            <div className="tw--mr-2 tw-flex md:tw-hidden">
                                {/* Mobile menu button */}
                                <button type="button" className="tw-bg-gray-800 tw-inline-flex tw-items-center tw-justify-center tw-p-2 tw-rounded-md tw-text-gray-400 hover:tw-text-white hover:tw-bg-gray-700 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-offset-2 focus:tw-ring-offset-gray-800 focus:tw-ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                    <span className="tw-sr-only">Open main menu</span>
                                    {/*
        Heroicon name: outline/menu

        Menu open: "tw-hidden", Menu closed: "tw-block"
      */}
                                    <svg className="tw-block tw-h-6 tw-w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                    {/*
        Heroicon name: outline/x

        Menu open: "tw-block", Menu closed: "tw-hidden"
      */}
                                    <svg className="tw-hidden tw-h-6 tw-w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Mobile menu, show/hide based on menu state. */}
                    <div className="md:tw-hidden" id="mobile-menu">
                        <div className="tw-px-2 tw-pt-2 tw-pb-3 tw-space-y-1 sm:tw-px-3">
                            {/* Current: "tw-bg-gray-900 tw-text-white", Default: "tw-text-gray-300 hover:tw-bg-gray-700 hover:tw-text-white" */}
                            <NavLink to="/admin/dashboard" className="tw-bg-gray-900 tw-text-white tw-block tw-px-3 tw-py-2 tw-rounded-md tw-text-base tw-font-medium">Dashboard</NavLink>
                            <NavLink to="/admin/product" className="tw-text-gray-300 hover:tw-bg-gray-700 hover:tw-text-white tw-block tw-px-3 tw-py-2 tw-rounded-md tw-text-base tw-font-medium">Product</NavLink>
                        </div>
                        <div className="tw-pt-4 tw-pb-3 tw-border-t tw-border-gray-700">
                            <div className="tw-flex tw-items-center tw-px-5">
                                <div className="tw-flex-shrink-0">
                                    <img className="tw-h-10 tw-w-10 tw-rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt />
                                </div>
                                <div className="tw-ml-3">
                                    <div className="tw-text-base tw-font-medium tw-leading-none tw-text-white">Tom Cook</div>
                                    <div className="tw-text-sm tw-font-medium tw-leading-none tw-text-gray-400">tom@example.com</div>
                                </div>
                                <button className="tw-ml-auto tw-bg-gray-800 tw-flex-shrink-0 tw-p-1 tw-rounded-full tw-text-gray-400 hover:tw-text-white focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-offset-2 focus:tw-ring-offset-gray-800 focus:tw-ring-white">
                                    <span className="tw-sr-only">View notifications</span>
                                    {/* Heroicon name: outline/bell */}
                                    <svg className="tw-h-6 tw-w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                    </svg>
                                </button>
                            </div>
                            <div className="tw-mt-3 tw-px-2 tw-space-y-1">
                                <a href="#" className="tw-block tw-px-3 tw-py-2 tw-rounded-md tw-text-base tw-font-medium tw-text-gray-400 hover:tw-text-white hover:tw-bg-gray-700">Your Profile</a>
                                <a href="#" className="tw-block tw-px-3 tw-py-2 tw-rounded-md tw-text-base tw-font-medium tw-text-gray-400 hover:tw-text-white hover:tw-bg-gray-700">Settings</a>
                                <a href="#" className="tw-block tw-px-3 tw-py-2 tw-rounded-md tw-text-base tw-font-medium tw-text-gray-400 hover:tw-text-white hover:tw-bg-gray-700">Sign out</a>
                            </div>
                        </div>
                    </div>
                </nav>
                {children}

            </div>




        </div >
    )
}

export default LayoutAdmin

