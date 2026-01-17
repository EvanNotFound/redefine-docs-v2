import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { i18n } from '@/lib/i18n';
import redefineIcon from '@/components/icons/redefine.svg';
import Image from 'next/image';

export function baseOptions(locale: string): BaseLayoutProps {
  
  return {
    i18n,
    nav: {
      title: <>
      <Image src={redefineIcon} alt="Redefine" width={16} height={16} />
      Redefine Docs
      </>,
      
    },
  };
}
