// pages/index.js
import fs from 'fs'
import path from 'path'
import { getSortedPostsData } from '@/lib/posts'
import ArticleList from '@/components/ArticleList'
import { FAQSection } from '@/components/FAQSection'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Xiaohongshu Wiki - Your Ultimate Guide',
  description: 'Discover everything about Xiaohongshu - from creating engaging content to understanding Chinese social commerce. Your comprehensive guide to success on China\'s leading lifestyle platform.',
}

export default function Home() {
  const allPostsData = getSortedPostsData().slice(0, 6)

  return (
    <div className="container mx-auto py-12 space-y-16">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Xiaohongshu Wiki
        </h1>
        <h2 className="text-2xl tracking-tighter sm:text-3xl md:text-3xl lg:text-3xl">Everything you want to know about Xiaohongshus</h2>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
          Xiaohongshu, often translated as &ldquo;Red Note App,&rdquo; is a popular Chinese social media platform where users can share their experiences, recommendations, and knowledge on a wide range of topics, from beauty and fashion to travel and food. It&apos;s like a combination of Instagram, Pinterest, and a product review site.
        </p>
      </section>

      <ArticleList articles={allPostsData} />
      <FAQSection />
    </div>
  )
}