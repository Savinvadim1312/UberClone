/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onOrderUpdated = /* GraphQL */ `
  subscription OnOrderUpdated($id: ID!) {
    onOrderUpdated(id: $id) {
      id
      createdAt
      type
      status
      originLatitude
      oreiginLongitude
      destLatitude
      destLongitude
      userId
      user {
        id
        username
        email
        orders {
          nextToken
        }
        car {
          id
          type
          latitude
          longitude
          heading
          isActive
          userId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      carId
      car {
        id
        type
        latitude
        longitude
        heading
        isActive
        orders {
          nextToken
        }
        userId
        user {
          id
          username
          email
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const onCarUpdated = /* GraphQL */ `
  subscription OnCarUpdated($id: ID!) {
    onCarUpdated(id: $id) {
      id
      type
      latitude
      longitude
      heading
      isActive
      orders {
        items {
          id
          createdAt
          type
          status
          originLatitude
          oreiginLongitude
          destLatitude
          destLongitude
          userId
          carId
          updatedAt
        }
        nextToken
      }
      userId
      user {
        id
        username
        email
        orders {
          nextToken
        }
        car {
          id
          type
          latitude
          longitude
          heading
          isActive
          userId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      username
      email
      orders {
        items {
          id
          createdAt
          type
          status
          originLatitude
          oreiginLongitude
          destLatitude
          destLongitude
          userId
          carId
          updatedAt
        }
        nextToken
      }
      car {
        id
        type
        latitude
        longitude
        heading
        isActive
        orders {
          nextToken
        }
        userId
        user {
          id
          username
          email
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      username
      email
      orders {
        items {
          id
          createdAt
          type
          status
          originLatitude
          oreiginLongitude
          destLatitude
          destLongitude
          userId
          carId
          updatedAt
        }
        nextToken
      }
      car {
        id
        type
        latitude
        longitude
        heading
        isActive
        orders {
          nextToken
        }
        userId
        user {
          id
          username
          email
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      username
      email
      orders {
        items {
          id
          createdAt
          type
          status
          originLatitude
          oreiginLongitude
          destLatitude
          destLongitude
          userId
          carId
          updatedAt
        }
        nextToken
      }
      car {
        id
        type
        latitude
        longitude
        heading
        isActive
        orders {
          nextToken
        }
        userId
        user {
          id
          username
          email
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCar = /* GraphQL */ `
  subscription OnCreateCar {
    onCreateCar {
      id
      type
      latitude
      longitude
      heading
      isActive
      orders {
        items {
          id
          createdAt
          type
          status
          originLatitude
          oreiginLongitude
          destLatitude
          destLongitude
          userId
          carId
          updatedAt
        }
        nextToken
      }
      userId
      user {
        id
        username
        email
        orders {
          nextToken
        }
        car {
          id
          type
          latitude
          longitude
          heading
          isActive
          userId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCar = /* GraphQL */ `
  subscription OnUpdateCar {
    onUpdateCar {
      id
      type
      latitude
      longitude
      heading
      isActive
      orders {
        items {
          id
          createdAt
          type
          status
          originLatitude
          oreiginLongitude
          destLatitude
          destLongitude
          userId
          carId
          updatedAt
        }
        nextToken
      }
      userId
      user {
        id
        username
        email
        orders {
          nextToken
        }
        car {
          id
          type
          latitude
          longitude
          heading
          isActive
          userId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCar = /* GraphQL */ `
  subscription OnDeleteCar {
    onDeleteCar {
      id
      type
      latitude
      longitude
      heading
      isActive
      orders {
        items {
          id
          createdAt
          type
          status
          originLatitude
          oreiginLongitude
          destLatitude
          destLongitude
          userId
          carId
          updatedAt
        }
        nextToken
      }
      userId
      user {
        id
        username
        email
        orders {
          nextToken
        }
        car {
          id
          type
          latitude
          longitude
          heading
          isActive
          userId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder {
    onCreateOrder {
      id
      createdAt
      type
      status
      originLatitude
      oreiginLongitude
      destLatitude
      destLongitude
      userId
      user {
        id
        username
        email
        orders {
          nextToken
        }
        car {
          id
          type
          latitude
          longitude
          heading
          isActive
          userId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      carId
      car {
        id
        type
        latitude
        longitude
        heading
        isActive
        orders {
          nextToken
        }
        userId
        user {
          id
          username
          email
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder {
    onUpdateOrder {
      id
      createdAt
      type
      status
      originLatitude
      oreiginLongitude
      destLatitude
      destLongitude
      userId
      user {
        id
        username
        email
        orders {
          nextToken
        }
        car {
          id
          type
          latitude
          longitude
          heading
          isActive
          userId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      carId
      car {
        id
        type
        latitude
        longitude
        heading
        isActive
        orders {
          nextToken
        }
        userId
        user {
          id
          username
          email
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder {
    onDeleteOrder {
      id
      createdAt
      type
      status
      originLatitude
      oreiginLongitude
      destLatitude
      destLongitude
      userId
      user {
        id
        username
        email
        orders {
          nextToken
        }
        car {
          id
          type
          latitude
          longitude
          heading
          isActive
          userId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      carId
      car {
        id
        type
        latitude
        longitude
        heading
        isActive
        orders {
          nextToken
        }
        userId
        user {
          id
          username
          email
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
