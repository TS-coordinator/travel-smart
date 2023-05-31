import { AppInfo } from "@/types/app"
export const APP_ID = '6b1c2f5b-13df-4e3b-bf2b-ff6c3961875a'
export const API_KEY = '<Web API Key From Dify>'
export const API_URL = ''
export const APP_INFO: AppInfo = {
  "title": 'Chat APP',
  "description": '这是一个旅游百事通，避坑指南。你可以依靠 AI 做旅游攻略，查询门票、设计路线日程、了解目的地的人文历史，让你的旅游更方便，更有意义。',
  "copyright": 'Milaifon Alex',
  "privacy_policy": '',
  "default_language": 'zh-Hans'
}

export const isShowPrompt = false
export const promptTemplate = 'I want you to act as a javascript console.'

export const API_PREFIX = '/api';

export const LOCALE_COOKIE_NAME = 'locale'

export const DEFAULT_VALUE_MAX_LEN = 48

export const WEB_API_CORS_ALLOW_ORIGINS: '*'
export const CONSOLE_CORS_ALLOW_ORIGINS: '*'
export const COOKIE_HTTPONLY: 'true'
export const COOKIE_SAMESITE: 'Lax'
export const COOKIE_SECURE: 'false'
