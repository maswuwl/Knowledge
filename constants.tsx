
import { AppItem, ModuleType, Project, FeedPost, SecureMail, CognitiveRobot } from './types';

export const GOLD_COLOR = '#D4AF37';

export const PLATFORM_MODULES = [
  { id: ModuleType.SOCIAL, name: 'موقع التواصل', icon: 'fa-share-nodes', description: 'تفاعل معرفي ونظام محادثة ذكي' },
  { id: ModuleType.MAIL, name: 'البريد الآمن', icon: 'fa-shield-halved', description: 'تفعيل وتوثيق مشفر' },
  { id: ModuleType.APPSTORE, name: 'متجر التطبيقات', icon: 'fa-bag-shopping', description: 'تطبيقات معرفية مبتكرة' },
  { id: ModuleType.PROJECTS, name: 'المشاريع', icon: 'fa-microchip', description: 'محرر تصميم ذكي ونشر خاص' },
  { id: ModuleType.ROBOTS, name: 'مركز الروبوتات', icon: 'fa-bolt-lightning', description: 'تصميم وتحليل الروبوتات' },
  { id: ModuleType.AI, name: 'الذكاء الاصطناعي', icon: 'fa-brain', description: 'مساعد ذكي وتحليل "قلب السمكة"' },
  { id: ModuleType.USER, name: 'وحدة المستخدم', icon: 'fa-user-astronaut', description: 'الملف الشخصي والمحفظة' },
  { id: ModuleType.ADMIN, name: 'لوحة التحكم', icon: 'fa-gauge-high', description: 'تحكم شامل وصلاحيات' },
];

export const MOCK_APPS: AppItem[] = [
  { id: '1', name: 'محلل البيانات الذهبي', category: 'أدوات', description: 'تحليل البيانات المعرفية بلمسة واحدة باستخدام خوارزميات متقدمة.', rating: 4.8, developer: 'خالد', icon: 'fa-chart-pie' },
  { id: '2', name: 'روبوت الترجمة السياقية', category: 'ذكاء اصطناعي', description: 'ترجمة تفهم السياق الثقافي والتقني للمشاريع.', rating: 4.9, developer: 'فريق معرفتي', icon: 'fa-language' },
  { id: '3', name: 'مصمم الواجهات السريع', category: 'تصميم', description: 'بناء واجهات احترافية في دقائق مع تصدير الكود مباشرة.', rating: 4.7, developer: 'خالد', icon: 'fa-wand-magic-sparkles' },
  { id: '4', name: 'صندوق خالد للإلهام', category: 'إبداع', description: 'تحديات يومية لتحفيز التفكير المعرفي خارج الصندوق.', rating: 5.0, developer: 'خالد', icon: 'fa-box-open' },
];

export const MOCK_PROJECTS: Project[] = [
  { id: 'p1', title: 'بوابة المعرفة العربية', status: 'published', pointsRequired: 500, earnings: 120, lastUpdated: 'منذ ساعتين' },
  { id: 'p2', title: 'نظام إدارة الروبوتات', status: 'draft', pointsRequired: 1000, earnings: 0, lastUpdated: 'منذ يوم' },
  { id: 'p3', title: 'محلل قلب السمكة', status: 'published', pointsRequired: 2500, earnings: 840, lastUpdated: 'منذ أسبوع' },
];

export const MOCK_FEED: FeedPost[] = [
  { id: 'f1', author: 'أحمد علي', avatar: 'https://i.pravatar.cc/150?u=ahmed', content: 'لقد أتممت للتو مشروعي الأول في منصة معرفتي الذهبية! تجربة رائعة فعلاً.', likes: 24, comments: 5, time: 'منذ ساعة' },
  { id: 'f2', author: 'سارة خالد', avatar: 'https://i.pravatar.cc/150?u=sara', content: 'هل جرب أحدكم ميزة "قلب السمكة" في التحليل المعرفي؟ النتائج مذهلة.', likes: 42, comments: 12, time: 'منذ 3 ساعات' },
];

export const MOCK_MAILS: SecureMail[] = [
  { id: 'm1', subject: 'تفعيل التوثيق الذهبي', body: 'مرحباً خالد، تم التحقق من هويتك بنجاح. أنت الآن عضو موثق.', sender: 'نظام المصادقة', date: '2023-10-27', isRead: false, isEncrypted: true },
  { id: 'm2', subject: 'تحديثات أمنية', body: 'تم تشفير جميع بيانات مشاريعك بأحدث بروتوكولات الأمان.', sender: 'الأمن الرقمي', date: '2023-10-26', isRead: true, isEncrypted: true },
];

export const MOCK_ROBOTS: CognitiveRobot[] = [
  { id: 'r1', name: 'روبوت المنطق', specialty: 'تحليل البيانات', status: 'active', accuracy: 98.4 },
  { id: 'r2', name: 'روبوت الإبداع', specialty: 'توليد المحتوى', status: 'learning', accuracy: 85.0 },
  { id: 'r3', name: 'روبوت الأمان', specialty: 'التشفير', status: 'idle', accuracy: 99.9 },
];
