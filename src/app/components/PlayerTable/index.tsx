/**
 *
 * PlayerTable
 *
 */
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table } from 'antd';
import { IPlayer } from 'app/pages/Players/interface/player.interface';
import { getNationsClassnameSmall } from 'app/pages/Players/utils/nations';
import React from 'react';
import Highlighter from 'react-highlight-words';

interface Props {
  dataSource: IPlayer[];
}

export function PlayerTable(props: Props) {
  const [state, setState] = React.useState({
    searchText: '',
    searchedColumn: '',
  });
  let searchInput;

  const getColumnSearchProps = dataIndex => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => searchInput.select(), 100);
      }
    },
    render: text => {
      if (dataIndex === 'team') {
        return (
          <img
            alt="scudetto_squadra"
            src={`teams/${text.toLowerCase()}.png`}
            style={{ height: 40 }}
          />
        );
      }
      if (state.searchedColumn === dataIndex) {
        return (
          <Highlighter
            highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
            searchWords={[state.searchText]}
            autoEscape
            textToHighlight={text ? text.toString() : ''}
          />
        );
      } else {
        return text;
      }
    },
  });

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  const handleReset = clearFilters => {
    clearFilters();
    setState({ ...state, searchText: '' });
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      ...getColumnSearchProps('name'),
    },
    {
      title: 'Team',
      dataIndex: 'team',
      key: 'team',
      ...getColumnSearchProps('team'),
    },
    {
      title: 'Nazione',
      dataIndex: 'nation',
      key: 'nation',
      render: text => {
        return <span className={getNationsClassnameSmall(text)}></span>;
      },
    },
    {
      title: 'Quotazione iniziale',
      dataIndex: 'initialQuotation',
      key: 'initialQuotation',
    },
    {
      title: 'Quotazione attuale',
      dataIndex: 'actualQuotation',
      key: 'actualQuotation',
    },
  ];
  return (
    <Table
      rowKey="id"
      dataSource={props.dataSource}
      columns={columns}
      style={{ fontSize: 52 }}
      size="small"
    />
  );
}
