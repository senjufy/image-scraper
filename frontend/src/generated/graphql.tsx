import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type Image = {
  __typename?: 'Image';
  capturedBy: Scalars['String'];
  id: Scalars['Float'];
  imgSmall: Scalars['String'];
  ownerName: Scalars['String'];
  ownerProf: Scalars['String'];
  regularImage: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createImage: Image;
  deleteImage: Scalars['Boolean'];
  login: UserResponse;
  register: UserResponse;
};


export type MutationCreateImageArgs = {
  capturedBy: Scalars['String'];
  imgSmall: Scalars['String'];
  ownerName: Scalars['String'];
  ownerProf: Scalars['String'];
  regularImage: Scalars['String'];
};


export type MutationDeleteImageArgs = {
  id: Scalars['Float'];
};


export type MutationLoginArgs = {
  options: UserNamePasswordInput;
};


export type MutationRegisterArgs = {
  options: UserNamePasswordInput;
};

export type Query = {
  __typename?: 'Query';
  allUsers: Array<User>;
  images: Array<Image>;
  me?: Maybe<User>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['Float'];
  username: Scalars['String'];
};

export type UserNamePasswordInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type RegisterMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', message: string, field: string }> | null | undefined, user?: { __typename?: 'User', id: number, username: string } | null | undefined } };


export const RegisterDocument = gql`
    mutation Register($username: String!, $password: String!) {
  register(options: {username: $username, password: $password}) {
    errors {
      message
      field
    }
    user {
      id
      username
    }
  }
}
    `;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument);
};