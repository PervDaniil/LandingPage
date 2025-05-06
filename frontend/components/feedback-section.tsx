import React from "react";


type Props = {
    children: React.ReactElement
}

export default function FeedbackSection({ children }: Props) {
    return (
        <section className="grid lg:grid-cols-2 min-h-screen w-full bg-black">
            <div className="pt-10 p-5 lg:p-20 w-full h-full">
                { children }
            </div>
            <div className="pt-10 p-20 w-full h-full hidden lg:block">
                <div className="flex flex-row flex-wrap lg:flex-nowrap">
                    <span style={{ writingMode: 'vertical-rl' }} className="text-8xl ">Landing Kg</span>
                    <div className="mt-15 space-y-12">
                        <p className="ml-10 text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, perferendis maxime consectetur necessitatibus aperiam non molestiae iusto labore beatae, earum dolores eaque nisi, voluptate quia pariatur possimus cupiditate perspiciatis natus?</p>
                        <p className="ml-10 text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, perferendis maxime consectetur necessitatibus aperiam non molestiae iusto labore beatae, earum dolores eaque nisi, voluptate quia pariatur possimus cupiditate perspiciatis natus?</p>
                        <p className="ml-10 text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, perferendis maxime consectetur necessitatibus aperiam non molestiae iusto labore beatae, earum dolores eaque nisi, voluptate quia pariatur possimus cupiditate perspiciatis natus?</p>
                        <p className="ml-10 text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, perferendis maxime consectetur necessitatibus aperiam non molestiae iusto labore beatae, earum dolores eaque nisi, voluptate quia pariatur possimus cupiditate perspiciatis natus?</p>
                    </div>
                </div>
            </div>
        </section>
    )
}