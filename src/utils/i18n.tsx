import { ReactNode } from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';
import { useRouter } from 'next/router';
import en from '~/lang/en';
import vi from '~/lang/vi';
import { LANG } from './contains';

interface ILang {
    'vi-VN': Record<string, string>
    'en-US': Record<string, string>
}

const languages:ILang = {
    'vi-VN': vi,
    'en-US': en,
};

type IProps = {
    children: ReactNode | ReactNode[]
}

const useI18n = () => {
    const router = useRouter();
    const { locale = LANG.VI, defaultLocale } = router;
    const messages = languages[LANG.VI];
    const Component = ({ children }:IProps) => (
        <IntlProvider messages={messages} locale={locale} defaultLocale={defaultLocale} onError={() => null}>
            {children}
        </IntlProvider>
    );
    return Component;
};

const I18N = ({ children }:IProps) => {
    const Component = useI18n();
    return (
        <Component>
            {children}
        </Component>
    );
};

export const getMessageIntl = (id, values = {}) => {
    try {
        const Component = useI18n();
        return (
            <Component>
                <FormattedMessage id={id} values={values} defaultMessage="Lỗi hệ thống" />
            </Component>
        );
    } catch {
        if (typeof window === 'undefined') return 'Lỗi hệ thống';
        const [lang] = window?.location.pathname.split('/');
        if (lang === LANG.EN) return languages[lang][id];
        return languages[LANG.VI][id];
    }
};

export default I18N;
