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
  creatorId: Scalars['Float'];
  id: Scalars['Float'];
  imgDownload: Scalars['String'];
  imgSmall: Scalars['String'];
  ownerName: Scalars['String'];
  ownerProf: Scalars['String'];
  regularImage: Scalars['String'];
};

export type ImageError = {
  __typename?: 'ImageError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type ImageInput = {
  capturedBy: Scalars['String'];
  imgDownload: Scalars['String'];
  imgSmall: Scalars['String'];
  ownerName: Scalars['String'];
  ownerProf: Scalars['String'];
  regularImage: Scalars['String'];
};

export type ImageResponse = {
  __typename?: 'ImageResponse';
  errors?: Maybe<Array<ImageError>>;
  image?: Maybe<Image>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createImage: ImageResponse;
  deleteImage: Scalars['Boolean'];
  login: UserResponse;
  logout: Scalars['Boolean'];
  register: UserResponse;
};


export type MutationCreateImageArgs = {
  input: ImageInput;
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
  imageByCreator: Array<Image>;
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

export type ImageFragmentFragment = { __typename?: 'Image', id: number, imgSmall: string, capturedBy: string, ownerProf: string, ownerName: string, regularImage: string, creatorId: number, imgDownload: string };

export type RegularUserFragment = { __typename?: 'User', id: number, username: string };

export type AddImageMutationVariables = Exact<{
  imgSmall: Scalars['String'];
  capturedBy: Scalars['String'];
  ownerProf: Scalars['String'];
  ownerName: Scalars['String'];
  regularImage: Scalars['String'];
  imgDownload: Scalars['String'];
}>;


export type AddImageMutation = { __typename?: 'Mutation', createImage: { __typename?: 'ImageResponse', errors?: Array<{ __typename?: 'ImageError', message: string, field: string }> | null | undefined, image?: { __typename?: 'Image', id: number, imgSmall: string, capturedBy: string, ownerProf: string, ownerName: string, regularImage: string, creatorId: number, imgDownload: string } | null | undefined } };

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null | undefined, user?: { __typename?: 'User', id: number, username: string } | null | undefined } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type RegisterMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', message: string, field: string }> | null | undefined, user?: { __typename?: 'User', id: number, username: string } | null | undefined } };

export type RemoveImageMutationVariables = Exact<{
  id: Scalars['Float'];
}>;


export type RemoveImageMutation = { __typename?: 'Mutation', deleteImage: boolean };

export type ImageByCreatorQueryVariables = Exact<{ [key: string]: never; }>;


export type ImageByCreatorQuery = { __typename?: 'Query', imageByCreator: Array<{ __typename?: 'Image', id: number, imgSmall: string, capturedBy: string, ownerProf: string, ownerName: string, regularImage: string, creatorId: number, imgDownload: string }> };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: number, username: string } | null | undefined };

export const ImageFragmentFragmentDoc = gql`
    fragment ImageFragment on Image {
  id
  imgSmall
  capturedBy
  ownerProf
  ownerName
  regularImage
  creatorId
  imgDownload
}
    `;
export const RegularUserFragmentDoc = gql`
    fragment RegularUser on User {
  id
  username
}
    `;
export const AddImageDocument = gql`
    mutation AddImage($imgSmall: String!, $capturedBy: String!, $ownerProf: String!, $ownerName: String!, $regularImage: String!, $imgDownload: String!) {
  createImage(
    input: {imgSmall: $imgSmall, capturedBy: $capturedBy, ownerProf: $ownerProf, ownerName: $ownerName, regularImage: $regularImage, imgDownload: $imgDownload}
  ) {
    errors {
      message
      field
    }
    image {
      ...ImageFragment
    }
  }
}
    ${ImageFragmentFragmentDoc}`;

export function useAddImageMutation() {
  return Urql.useMutation<AddImageMutation, AddImageMutationVariables>(AddImageDocument);
};
export const LoginDocument = gql`
    mutation Login($username: String!, $password: String!) {
  login(options: {username: $username, password: $password}) {
    errors {
      field
      message
    }
    user {
      ...RegularUser
    }
  }
}
    ${RegularUserFragmentDoc}`;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;

export function useLogoutMutation() {
  return Urql.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument);
};
export const RegisterDocument = gql`
    mutation Register($username: String!, $password: String!) {
  register(options: {username: $username, password: $password}) {
    errors {
      message
      field
    }
    user {
      ...RegularUser
    }
  }
}
    ${RegularUserFragmentDoc}`;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument);
};
export const RemoveImageDocument = gql`
    mutation RemoveImage($id: Float!) {
  deleteImage(id: $id)
}
    `;

export function useRemoveImageMutation() {
  return Urql.useMutation<RemoveImageMutation, RemoveImageMutationVariables>(RemoveImageDocument);
};
export const ImageByCreatorDocument = gql`
    query imageByCreator {
  imageByCreator {
    ...ImageFragment
  }
}
    ${ImageFragmentFragmentDoc}`;

export function useImageByCreatorQuery(options: Omit<Urql.UseQueryArgs<ImageByCreatorQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<ImageByCreatorQuery>({ query: ImageByCreatorDocument, ...options });
};
export const MeDocument = gql`
    query Me {
  me {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;

export function useMeQuery(options: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<MeQuery>({ query: MeDocument, ...options });
};