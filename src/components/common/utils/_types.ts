import { CSSProperties, PropsWithChildren, FormEvent, RefObject } from "react";
import { FluidObject } from "gatsby-image";
import React from "react";

export type themeType = "dark" | "light" | null;

export interface HeaderInt {
  headerStyle: CSSProperties;
  mTheme: themeType;
  handleTheme: (e: any) => void;
}

export interface WorkInt {
  renderProject: () => React.ReactNode;
}

export interface ContactInt {
  handleChange: (name: string, value: string) => void;
  handleSubmit: (e: FormEvent) => void;
  name: string;
  email: string;
  company: string;
  message: string;
  errors: {
    name?: string;
    message?: string;
    company?: string;
    email?: string;
  };
  submitButtonRef: RefObject<any>;
}

export interface LayoutInt {
  children: PropsWithChildren<any>;
}

export interface ProjectInt {
  name: string;
  device: boolean;
  title: string;
  desc: string;
  role: string;
  tech: string[];
  playStoreBadge?: { childImageSharp: { fluid: FluidObject } } | undefined;
  appStoreBadge?: { childImageSharp: { fluid: FluidObject } } | undefined;
  repoBadge?: { childImageSharp: { fluid: FluidObject } } | undefined;
  playstoreLink?: string | undefined;
  appStoreLink?: string | undefined;
  repoLink?: string | undefined;
  style: {
    projectPreview?: undefined | CSSProperties;
    projectCard?: undefined | CSSProperties;
    id: string;
  };
  image?: { childImageSharp: { fluid: FluidObject } } | undefined;
  link?: string | undefined;
}
