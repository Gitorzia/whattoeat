import Link from 'next/link';
import { HomeIcon, TrophyIcon, ShoppingBagIcon, AcademicCapIcon, UserGroupIcon, UserIcon } from '@heroicons/react/24/outline';

const modules = [
  {
    title: '赛事球星',
    description: '关注最新赛事动态和球星资讯',
    icon: TrophyIcon,
    href: '/tournaments',
  },
  {
    title: '装备',
    description: '专业装备推荐和评测',
    icon: ShoppingBagIcon,
    href: '/equipment',
  },
  {
    title: '技术',
    description: '学习和分享羽毛球技术',
    icon: AcademicCapIcon,
    href: '/technique',
  },
  {
    title: '约球',
    description: '寻找附近的球友切磋球技',
    icon: UserGroupIcon,
    href: '/find-partner',
  },
  {
    title: '教练',
    description: '专业教练一对一指导',
    icon: UserIcon,
    href: '/coach',
  },
];

const hotPosts = [
  {
    id: 1,
    title: '林丹VS李宗伟经典比赛回顾',
    author: '羽球达人',
    views: 1234,
    replies: 88,
  },
  {
    id: 2,
    title: '如何选择适合自己的球拍',
    author: '装备专家',
    views: 986,
    replies: 45,
  },
  {
    id: 3,
    title: '后场高远球技术详解',
    author: '教练小王',
    views: 876,
    replies: 67,
  },
];

export default function Home() {
  return (
    <div className="space-y-8">
      {/* 功能模块 */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {modules.map((module) => (
          <Link
            key={module.title}
            href={module.href}
            className="card hover:shadow-md transition-shadow group"
          >
            <div className="flex items-start space-x-4">
              <module.icon className="w-8 h-8 text-primary group-hover:text-secondary transition-colors" />
              <div>
                <h3 className="text-lg font-semibold">{module.title}</h3>
                <p className="text-text-secondary">{module.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </section>

      {/* 热门帖子 */}
      <section>
        <h2 className="text-2xl font-bold mb-4">热门帖子</h2>
        <div className="space-y-4">
          {hotPosts.map((post) => (
            <Link
              key={post.id}
              href={`/post/${post.id}`}
              className="card block hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-medium mb-2">{post.title}</h3>
              <div className="flex justify-between text-sm text-text-secondary">
                <span>{post.author}</span>
                <span>{post.views}浏览 · {post.replies}回复</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
} 