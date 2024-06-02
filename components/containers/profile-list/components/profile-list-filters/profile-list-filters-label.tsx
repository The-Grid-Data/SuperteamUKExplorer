import pluralize from 'pluralize';
import { Filters } from '../../hooks/use-profile-filters';
import { Button } from '@/components/ui/button';

export type ProfileListFiltersLabelProps = {
  filters: Filters['filters'];
};

export const ProfileListFiltersLabel = ({
  filters
}: ProfileListFiltersLabelProps) => {
  const activeFiltersSum = Object.values(filters)
    .map(item => item.active)
    .reduce((sum, active) => sum + (active ? 1 : 0), 0);

  if (activeFiltersSum > 0) {
    return (
      <div className="flex items-center gap-2">
        <span className="text text-sm text-muted-foreground">
          There {pluralize('is', activeFiltersSum)}{' '}
          <span className="font-semibold text-primary">{activeFiltersSum}</span>{' '}
          active {pluralize('filters', activeFiltersSum)}
        </span>{' '}
        <Button
          onClick={() => {
            Object.values(filters).forEach(filter => filter.reset());
          }}
          variant="outline"
          className="h-7"
          size="sm"
        >
          Clear filters
        </Button>
      </div>
    );
  }

  return <div />;
};
