import React from 'react';
import { ActivityIndicator, ScrollView, View } from 'react-native';

import { Typography } from 'components/shared/Typography';

import { Cell } from './components/Cell';

import cellStyles from './components/Cell/Cell.styles';

import styles from './Table.styles';

const Table = ({
  style,
  headerTextStyle,
  loading,
  data,
  columns,
  cellRenderer,
  onRowClick,
}) => (
  <ScrollView horizontal style={styles.tableWrapper}>
    <View style={[styles.table, style]}>
      <View style={styles.header}>
        {columns.map((column, columnIndex) => (
          <View
            key={column.key}
            style={[
              cellStyles.cell,
              styles.headerCell,
              columnIndex === 0 && styles.firstHeaderCell,
              columnIndex === columns.length - 1 && styles.lastHeaderCell,
              { minWidth: column.minWidth, maxWidth: column.maxWidth },
            ]}>
            <Typography style={styles.headerText} weight="bold">
              {column.label}
            </Typography>
          </View>
        ))}
      </View>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <View style={styles.body}>
          {data.map((item, itemIndex) => (
            <View
              key={item.id}
              style={[
                styles.row,
                itemIndex === 0 && styles.firstRow,
                itemIndex === data.length - 1 && styles.lastRow,
              ]}
              onClick={() => onRowClick(item)}>
              {columns.map((column, index) =>
                cellRenderer ? (
                  cellRenderer(
                    {
                      ...column,
                      itemIndex,
                      item,
                      style: cellStyles.cell,
                    },
                    Cell,
                  )
                ) : (
                  <Cell
                    minWidth={column.minWidth}
                    maxWidth={column.maxWidth}
                    key={column.key}>
                    {item[column.key]}
                  </Cell>
                ),
              )}
            </View>
          ))}
        </View>
      )}
    </View>
  </ScrollView>
);

Table.defaultProps = {
  onRowClick: () => {},
};

export default React.memo(Table);
