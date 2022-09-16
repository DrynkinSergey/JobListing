import { Badge } from 'UI/Badge'
import { Card } from 'UI/Card'
import { Stack } from 'UI/Stack'

import { useSelector, useDispatch } from 'react-redux'
import { selectFilters } from 'store/filters/filter-selectors'
import { clearFilter, removeFilter } from 'store/filters/filter-actions'
const FilterPanel = () => {
	const dispatch = useDispatch()
	const currentFilters = useSelector(selectFilters)
	if (currentFilters.length === 0) {
		return null
	}

	const handleClearFilter = () => {
		dispatch(clearFilter())
	}
	const handleRemoveFilter = filter => {
		dispatch(removeFilter(filter))
	}
	return (
		<Card className='filter-panel'>
			<div className='filter-panel-wrapper'>
				<Stack>
					{currentFilters.map(filter => (
						<Badge
							variant='clearable'
							onClear={() => handleRemoveFilter(filter)}
							key={filter}
						>
							{filter}
						</Badge>
					))}
				</Stack>
				<button className='link' onClick={handleClearFilter}>
					Clear
				</button>
			</div>
		</Card>
	)
}

export { FilterPanel }
