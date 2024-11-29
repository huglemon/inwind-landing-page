'use client';

import { useEffect } from 'react';

export default function ThemeScript() {
  useEffect(() => {
    // 从 localStorage 获取保存的主题
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      // 检测系统主题偏好
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialTheme = prefersDarkMode ? 'business' : 'corporate';
      document.documentElement.setAttribute('data-theme', initialTheme);
      localStorage.setItem('theme', initialTheme);
    }
  }, []);

  return null;
}
