import Text from '@components/ui/text'
import Link from '@components/ui/link'
import { useTranslation } from 'next-i18next'

interface Props {
  sectionHeading: string
  categorySlug?: string
  className?: string
  textClassName?: string
}

const SectionHeader: React.FC<Props> = ({
  sectionHeading = 'text-section-title',
  categorySlug,
  className = 'pb-0.5 mb-4 md:mb-5 lg:mb-6 2xl:mb-7 3xl:mb-8',
  textClassName = '',
}) => {
  const { t } = useTranslation('common')
  return (
    <div className={`flex items-center justify-between -mt-2 ${className}`}>
      <Text className={textClassName} variant='mediumHeading'>
        {t(`${sectionHeading}`)}
      </Text>
      {categorySlug && (
        <Link
          href={categorySlug}
          className='text-xs lg:text-sm xl:text-base text-heading mt-0.5 lg:mt-1'
        >
          {t('text-see-all-product')}
        </Link>
      )}
    </div>
  )
}

export default SectionHeader
