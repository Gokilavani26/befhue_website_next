import {
    Smartphone,
    Monitor,
    ShoppingCart,
    Layers,
    Database,
    Code,
    TrendingUp,
    Target,
    BarChart3,
    DollarSign,
    Eye,
    Link,
    Award,
    Users,
    MapPin,
    Zap,
    Shield,
    Headphones,
    BookOpen,
    FileText,
    Palette,
    Search,
    Share2,
    MousePointer2,
    MonitorPlay,
    Mail,
    MessageSquare,
    Briefcase,
    Fingerprint,
    HeartHandshake,
    PenTool,
    RefreshCw,
    Star,
    Box,
    CheckCircle,
    Clock,
    Building,
    Camera,
    Globe,
    Mic,
    Video,
    Scissors,
    MessageCircle,
    Heart,
    Smile,
    PlayCircle,
    MousePointer,
    Bot,
    Calendar,
    Edit,
    Hash,
    Image,
    Send,
    ShieldCheck,
    Tv,
    UserCheck,
    Cloud,
    CreditCard,
    Gauge,
    GitBranch,
    Lock,
    Server,
    ShoppingBag,
    Wrench,
    type LucideIcon,
    type LucideProps,
} from "lucide-react";

import type { JSX } from "react";

export const iconMap: Record<
    string,
    LucideIcon
> = {
    // Development
    Smartphone,
    Monitor,
    ShoppingCart,
    Layers,
    Database,
    Code,

    // Marketing
    TrendingUp,
    Target,
    BarChart3,
    DollarSign,
    Eye,
    Link,
    Search,
    Share2,
    MousePointer2,
    MonitorPlay,
    Mail,
    MessageSquare,

    // General
    Award,
    Users,
    MapPin,
    Zap,
    Shield,
    HeadphonesIcon: Headphones,
    BookOpen,
    FileText,
    Palette,
    Briefcase,

    // Design & Layout specific
    Fingerprint,
    HeartHandshake,
    PenTool,
    RefreshCw,
    Star,
    Box,
    CheckCircle,
    Clock,

    // Production & Editing specific
    Building,
    Camera,
    Globe,
    Mic,
    Video,
    Scissors,
    MessageCircle,
    Heart,
    Smile,
    PlayCircle,
    MousePointer,

    // Digital Marketing & SEO specific
    Bot,
    Calendar,
    Edit,
    Hash,
    Image,
    Send,
    ShieldCheck,
    Tv,
    UserCheck,

    // Software Development specific
    Cloud,
    CreditCard,
    Gauge,
    GitBranch,
    Lock,
    Server,
    ShoppingBag,
    Wrench,
};

export const getIcon = (
    iconName: string,
    props: LucideProps = {}
): JSX.Element | null => {
    const IconComponent =
        iconMap[iconName];

    if (!IconComponent) {
        return null;
    }

    return <IconComponent {...props} />;
};