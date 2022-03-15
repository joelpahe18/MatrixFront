import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import Checkbox from '@material-ui/core/Checkbox';
import Spinner from './Spinner';
import styled from 'styled-components';

import ArrowDownward from '@material-ui/icons/ArrowDownward';

const sortIcon = <ArrowDownward />;
const selectProps = { indeterminate: isIndeterminate => isIndeterminate };

const TextField = styled.input`
	height: 32px;
	width: 200px;
	border-radius: 3px;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
	border: 1px solid #e5e5e5;
	padding: 0 32px 0 16px;

	&:hover {
		cursor: pointer;
	}
`;

const FilterComponent = ({ filterText, onFilter }) => (
	<>
		<TextField
			id="search"
			type="text"
			placeholder="Filtrar por Tabopc"
			aria-label="Search Input"
			value={filterText}
			onChange={onFilter}
		/>
	</>
);


const customStyles = {
    	header: {
    		style: {
    			minHeight: '56px',
    		},
    	},
    	headRow: {
    		style: {
    			borderTopStyle: 'solid',
    			borderTopWidth: '1px',
    			borderTopColor: 'gray',
    		},
    	},
    	headCells: {
    		style: {
    			'&:not(:last-of-type)': {
    				borderRightStyle: 'solid',
    				borderRightWidth: '1px',
    				borderRightColor: 'gray',
    			},
    		},
    	},
    	cells: {
    		style: {
    			'&:not(:last-of-type)': {
    				borderRightStyle: 'solid',
    				borderRightWidth: '1px',
    				borderRightColor: 'gray',
    			},
    		},
    	},
    };

const CustomLoader = () => (
    <Spinner />
);

function DataTableBase(props) {
    const [filterText, setFilterText] = useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
    const filteredItems = props.info.filter(
        		item => item.Tabopc && item.Tabopc.toString().toLowerCase().includes(filterText.toLowerCase()),
        	);

    const subHeaderComponentMemo = React.useMemo(() => {
        		const handleClear = () => {
        			if (filterText) {
        				setResetPaginationToggle(!resetPaginationToggle);
        				setFilterText('');
        			}
        		};
        
        		return (
        			<FilterComponent 
                        onFilter={e => setFilterText(e.target.value)} 
                        onClear={handleClear} filterText={filterText} />
        		);
        	}, [filterText, resetPaginationToggle]);


    return (
        <DataTable
            progressComponent={<CustomLoader />}
            selectableRowsComponent={Checkbox}
            data={filteredItems} 
            pagination
            selectableRowsComponentProps={selectProps}
            sortIcon={sortIcon}
            dense
            customStyles={customStyles}
            paginationResetDefaultPage={resetPaginationToggle}
            subHeader
            subHeaderComponent={subHeaderComponentMemo}
            persistTableHead
            {...props}
        />
    );
}

export default DataTableBase;


// const mapStateToProps = (reducers) => {
//     return reducers.usersReducer;
//   };
  
//   export default connect(mapStateToProps, useRedirect)(DataTableBase);